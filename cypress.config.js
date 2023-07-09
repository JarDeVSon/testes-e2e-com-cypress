/* eslint-disable linebreak-style */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: 'o675g1',
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    waitForAnimations: true,
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 60000,
    requestTimeout: 60000,
    responseTimeout: 60000,
    defaultBrowser: 'chrome',
    env: {
      viewportWidthBreakpoint: 768,
    },
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },
  }
})
