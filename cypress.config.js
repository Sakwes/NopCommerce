
const { defineConfig } = require('cypress')
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.sharedSecret =
        process.env.NODE_ENV === 'qa' ? 'hoop brick tort' : 'sushi cup lemon'
      
      return config
    },
    baseUrl: "https://demo.nopcommerce.com/",
    watchForFileChanges: false,
    defaultCommandTimeout: 30000,
    chromeWebSecurity: true,
    modifyObstructiveCode: false,
    //experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
