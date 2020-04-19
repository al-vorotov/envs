/* eslint-disable */
// Prod environment for gatsby plugins
const gatsbyConfig = require(`./gatsby-config-generator`)

require('dotenv').config({
  path: `.env.production`,
})

module.exports = gatsbyConfig()
