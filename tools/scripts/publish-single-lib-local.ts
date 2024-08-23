import { releaseVersion, releasePublish } from 'nx/release';
import { readCachedProjectGraph } from '@nx/devkit';
import { execSync } from 'child_process';
import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { logger } from '@nrwl/devkit';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// Parse command line arguments using yargs
const argv = yargs(hideBin(process.argv))
  .version(false) // don't use the default meaning of version in yargs
  .option('libraries', {
    type: 'string',
    description: 'Comma-separated list of libraries to update and publish',
    demandOption: true
  })
  .option('version', {
    type: 'string',
    description: 'Version to publish',
  })
  .option('targetPath', {
    type: 'string',
    description: 'Target path to install the libraries',
    demandOption: true
  })
  .option('skipCache', {
    type: 'boolean',
    description: 'Skip the Nx build cache',
    default: false
  })
  .parseSync();  // Use .parseSync() to avoid returning a promise

const options = {
  libraries: argv.libraries.split(',').map(lib => lib.trim()),
  version: argv.version,
  targetPath: argv.targetPath || '',  // Ensure targetPath is always defined
  skipCache: argv.skipCache
};

async function run() {
  try {
    console.log('Executor started with options:', options); // Debugging log
    const version = options.version || `0.0.0-local.${Date.now()}`;
    const libraries = options.libraries;
    const targetPath = options.targetPath;

    if (!libraries || libraries.length === 0) {
      throw new Error('At least one library name must be specified');
    }

    console.log('Starting releaseVersion with version:', version); // Debugging log
    console.log('Libraries to update:', libraries.join(', ')); // Debugging log

    /**
     * Step 1: Build all specified libraries
     * This section is now handled by the dependsOn configuration in project.json
     
    for (const library of libraries) {
      console.log(`Building ${library}...`); // Debugging log
      const buildResult = await runExecutor(
        { project: library, target: 'build' },
        { skipNxCache: options.skipCache },
        {} as any  // Provide an empty object as a dummy context
      );

      for await (const result of buildResult) {
        if (!result.success) {
          throw new Error(`Failed to build ${library}`);
        }
      }
      console.log(`Successfully built ${library}`); // Debugging log
    }
    */

    /**
     * Step 2: Update Versions in the specified libraries
     */
    const { projectsVersionData } = await releaseVersion({
      specifier: version,
      stageChanges: false,
      gitCommit: false,
      gitTag: false,
      firstRelease: true,
      projects: libraries,
      generatorOptionsOverrides: {
        skipLockFileUpdate: true,
      },
    });

    console.log('Version update completed. Project version data:', projectsVersionData); // Debugging log

    /**
     * Step 3: Publish Libraries on Verdaccio
     */
    const publishStatus = await releasePublish({
      firstRelease: true,
      projects: libraries,
    });

    console.log('Publish completed. Publish status:', publishStatus); // Debugging log

    /**
     * Step 4: Install your Libraries
     */
    const projectGraph = readCachedProjectGraph();

    for (const library of libraries) {
      const project = projectGraph.nodes[library];
      const { newVersion } = projectsVersionData[library];
      const packageJson = JSON.parse(
        readFileSync(
          resolve(process.cwd(), project.data.root, `package.json`)
        ).toString()
      );
      const packageToInstall = `${packageJson.name}@${newVersion}`;

      const installCommand = `${getInstallCommand(targetPath)} ${packageToInstall} --registry=http://localhost:4873`;

      console.log(`Running install command for ${library}: ${installCommand}`); // Debugging log
      process.chdir(targetPath);
      execSync(installCommand);
      console.log(`Successfully installed ${packageToInstall}`); // Debugging log
    }

    return { success: true, publishStatus };
  } catch (e) {
    if (e instanceof Error) {
      logger.error(`Error occurred: ${e.message}`);
      logger.error(`Error stack trace: ${e.stack}`);
    } else {
      logger.error(`Unknown error occurred: ${JSON.stringify(e)}`);
    }
    return { success: false };
  }
}

// Used to define which install command should be used on the targetPath
function getInstallCommand(targetPath: string): string {
  const siblingFiles = readdirSync(targetPath);
  if (siblingFiles.includes('yarn.lock')) {
    return 'yarn add';
  }
  if (siblingFiles.includes('package-lock.json')) {
    return 'npm install';
  }
  if (siblingFiles.includes('pnpm-lock.yaml')) {
    return 'pnpm add';
  }
  throw new Error(`No package manager found for target repository: ${targetPath}`);
}

run();