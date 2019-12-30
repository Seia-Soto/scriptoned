const knex = require('knex')
const preferences = require('../../preferences')

module.exports = knex(preferences.database)
