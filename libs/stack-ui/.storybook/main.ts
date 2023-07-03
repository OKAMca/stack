/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        // @ts-ignore
        viteConfigPath: 'libs/stack-ui/vite.config.ts',
      },
    },
  },
};

export default config;
 
// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
