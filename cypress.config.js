const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    supportFile: 'cypress/support/e2e.js',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
    baseUrl: 'https://www.ferreiracosta.com',
    specPattern: '**/**/*.cy.js',
  
  },
});
