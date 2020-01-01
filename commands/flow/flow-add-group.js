const util = require('util')
const { knex } = require('../../structures/database')

module.exports = {
  name: 'flow-add-group',
  category: 'flow',
  permission: 'everyone',
  aliases: [
    'flow-addgroup',
    'flow-creategroup',
    'add-flow-group',
    'addflowgroup',
    'create-flow-group',
    'createflowgroup'
  ],

  fn: async (client, message, opts) => {
    if (!message.parameters[0]) {
      return message.channel.send(message.translations.groupNameRequired)
    }
    if (message.parameters[0] > 32) {
      return message.channel.send(message.translations.groupNameMaxLengthExceed)
    }
    if ((message.parameters.slice(1) || []).join(' ') > 256) {
      return message.channel.send(message.translations.groupDescriptionMaxLengthExceed)
    }

    const linkedGroups = await knex('flowGroups')
      .select('*')
      .where({
        serviceIdx: message.guild.id
      })

    if (linkedGroups.find(group => group.name === message.parameters[0])) {
      return message.channel.send(util.format(message.translations.groupNameExists, message.parameters[0]))
    }

    message.channel.send(message.translations.creatingGroup)
      .then(async state => {
        try {
          await knex('flowGroups').insert({
            idx: 0,
            serviceIdx: message.guild.id,
            name: message.parameters[0],
            description: String(message.parameters.slice(1).join(' ') || '(empty)')
          })

          state.edit(util.format(message.translations.createdGroup, message.parameters[0]))
        } catch (error) {
          state.edit(message.translations.creationFailed)
        }
      })
  }
}
