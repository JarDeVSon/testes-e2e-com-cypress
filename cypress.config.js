/* eslint-disable linebreak-style */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    pageLoadTimeout: 40000,
    defaultCommandTimeout: 40000,
    defaultBrowser: 'chrome',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
