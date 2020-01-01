const { knex } = require('../../structures/database')

module.exports = {
  name: 'flow',
  category: 'flow',
  permission: 'everyone',

  fn: async (client, message, opts) => {
    const linkedGroups = await knex('flowGroups')
      .select('*')
      .where({
        serviceIdx: message.guild.id
      })

    if (!linkedGroups.length) {
      return message.channel.send(message.translations.noFlowGroups)
    }

    const fields = []

    for (let k = 0; k < linkedGroups.length; k++) {
      fields.push({
        name: linkedGroups[k].name,
        value: linkedGroups[k].description + '\n\n'
      })

      const linkedNodes = await knex('flowNodes')
        .select('*')
        .where({
          serviceIdx: linkedGroups[k].idx
        })

      for (let i = 0; i < linkedNodes.length; i++) {
        fields[k].value += linkedNodes[i].name + '\n'
      }

      fields[k].value = fields[k].value.slice(0, 2000)
    }

    if (opts.permissions.embedAvailable) {
      message.channel.send({
        embed: {
          title: message.translations.title,
          description: message.translations.description,
          fields
        }
      })
    } else {
      let text =
        '> ' + message.translations.title +
        '\n' + message.translations.description

      for (let k = 0; k < fields.length; k++) {
        text += '\n\n> ' + fields[k].name
        text += '\n' + fields[k].value
      }

      if (opts.preferences.errorTracing) {
        text += '\n' + message.translations._raw[message.member.preferences.language].system.EmbedLinksNotAvailable
      }

      message.channel.send(text.slice(0, 2000))
    }
  }
}
