/// <reference types ="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
const dotenvPlugin = require('cypress-dotenv');
module.exports=(on, config)=>{
    config = dotenvPlugin(config)
    return config
};



