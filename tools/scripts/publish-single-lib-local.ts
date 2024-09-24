import { releaseVersion, releasePublish } from 'nx/release';
import { readCachedProjectGraph } from '@nx/devkit';
import { execSync } from 'child_process';
import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { logger } from '@nrwl/devkit';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

async function checkVerdaccioRunning() {
  try {
    const response = await fetch('http://localhost:4873/-/ping');
    return response.ok;
  } catch (error) {
    return false;
  }
}

(async () => {
  // Check if Verdaccio is running
  const verdaccioRunning = await checkVerdaccioRunning();
  if (!verdaccioRunning) {
    logger.error('Verdaccio is not running. Please start it using the following command:');
    logger.error('nx run @stack-ui/source:local-registry');
    process.exit(1);
  }
  // Parse command line arguments using yargs
  const argv = await yargs(hideBin(process.argv))
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
      description: 'Target path to install the libraries'
    })
    .option('skipCache', {
      type: 'boolean',
      description: 'Skip the Nx build cache',
      default: false
    })
    .parseAsync();  // Use .parseAsync() to handle promises

  const options = {
    libraries: argv.libraries.split(',').map(lib => lib.trim()),
    version: argv.version,
    targetPath: argv.targetPath || '',  // Ensure targetPath is always defined
    skipCache: argv.skipCache
  };

  try {
    console.log('Executor started with options:', options); // Debug log
    const version = options.version || `0.0.0-local.${Date.now()}`;
    const libraries = options.libraries;
    const targetPath = options.targetPath;

    if (!libraries || libraries.length === 0) {
      throw new Error('At least one library name must be specified');
    }

    console.log('Starting releaseVersion with version:', version); // Debug log
    console.log('Libraries to update:', libraries.join(', ')); // Debug log

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

    console.log('Version update completed. Project version data:', projectsVersionData); // Debug log

    const publishStatus = await releasePublish({
      firstRelease: true,
      projects: libraries,
    });

    console.log('Publish completed. Publish status:', publishStatus); // Debug log

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

      if (targetPath) {
        console.log(`Running install command for ${library}: ${installCommand}`); // Debug log
        process.chdir(targetPath);
        execSync(installCommand);
        console.log(`Successfully installed ${packageToInstall}`); // Debug log
      } else {
        console.log(`Run the following command in your target project: ${installCommand}`); // Debug log
      }
    }

    process.exit(0);
  } catch (e) {
    if (e instanceof Error) {
      logger.error(`Error occurred: ${e.message}`);
      logger.error(`Error stack trace: ${e.stack}`);
    } else {
      logger.error(`Unknown error occurred: ${JSON.stringify(e)}`);
    }
    process.exit(1);
  }
})();

// Used to define which install command should be used on the targetPath
function getInstallCommand(targetPath: string): string {
  if (!targetPath) {
    return 'npm install';
  }

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
