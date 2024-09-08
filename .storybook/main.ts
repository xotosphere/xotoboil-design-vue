const path = require("path");
// const { NormalModuleReplacementPlugin } = require("webpack");
import vue from '@vitejs/plugin-vue';

const {
  mergeConfig
} = require('vite');

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    '@storybook/eslint-config-storybook',
    "@storybook/addon-essentials",
    "@ljcl/storybook-addon-cssprops",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    { name: "storybook-addon-sass-postcss", options: { sassLoaderOptions: { implementation: require("sass") }, rule: { test: /\.(scss|sass)$/i } } },
    "@chromatic-com/storybook"
  ],

  async viteFinal(baseConfig, { configType }) {
    return mergeConfig(baseConfig, {
      resolve: { alias: { "@": path.resolve(__dirname, "../src/") } },
      plugins: [vue({ script: {} })],
    });
  },

  framework: {
    name: "@storybook/vue3-vite",
    options: {}
  }, // change this line

};

export default config;
