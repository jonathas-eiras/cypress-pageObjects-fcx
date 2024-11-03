const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    upportFile: false,
    baseUrl: 'https://www.ferreiracosta.com',
    specPattern: '**/**/*.cy.js',
  
  },
});
