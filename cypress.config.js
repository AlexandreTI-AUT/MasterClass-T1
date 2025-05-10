const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {

    env: {
      webUrl: "https://alexandreti-aut.github.io/",
      apiUrl: "https://serverest.dev",

    },

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;

    },
    viewportWidth: 1200,
    viewportHeight: 800,
  },
});
