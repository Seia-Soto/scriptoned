const { knex } = require('../database')

module.exports = async (type, serviceIdx, data) => {
  delete data.idx
  delete data.serviceIdx

  try {
    await knex(type).update(data).where({ serviceIdx })
  } catch (error) {
    return error
  }
}
