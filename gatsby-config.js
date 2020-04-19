/* eslint-disable */
// Prod environment for gatsby plugins
const gatsbyConfig = require(`./gatsby-config-generator`)

try {
  require('dotenv').config({
    path: `.env.staging`,
  })
} catch (e) {
  console.error(
    'Cannot find correct environment variables, reverting to dummies'
  )
  throw Error('No ENV file found')
}

module.exports = gatsbyConfig()
