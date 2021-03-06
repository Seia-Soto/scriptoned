const { knex } = require('../database')
const cache = require('./cache')
const preferences = require('../../preferences')

module.exports = async (type, serviceIdx) => {
  if (cache[type + serviceIdx]) return cache[type + serviceIdx]

  let result = {}

  try {
    const rows = await knex(type)
      .select('*')
      .where({ serviceIdx })

    result = await rows[0]

    if (!result) {
      result = preferences.app.defaults[type]

      result.idx = 0
      result.serviceIdx = serviceIdx

      await knex(type).insert(result)
    }
  } catch (error) {
    throw new Error(error)
  }

  cache[type + serviceIdx] = result

  return result
}
