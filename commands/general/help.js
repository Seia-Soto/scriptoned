const util = require('util')

let commands = {}
let commandsSources = {}

process.nextTick(() => {
  commands = require('../')
  commandsSources = Object.values(commands)
})

module.exports = {
  name: 'help',
  category: 'general',
  permission: 'everyone',
  aliases: [
    'h'
  ],

  fn: (client, message, opts) => {
    const commandSets = {} // NOTE: Categorized

    for (let i = 0; i < commandsSources.length; i++) {
      if (!commandSets[commandsSources[i].category]) {
        commandSets[commandsSources[i].category] = []
      }
      if (!commandsSources[i].isAlias) {
        commandSets[commandsSources[i].category].push(commandsSources[i].name)
      }
    }

    const categories = Object.keys(commandSets)

    if (opts.permissions.embedAvailable) {
      const embed = {
        title: message.translations.title,
        description: message.translations.description,
        fields: []
      }

      for (let k = 0; k < categories.length; k++) {
        const category = categories[k]

        embed.fields.push({
          name: category.charAt(0).toUpperCase() + category.slice(1),
          value: commandSets[category].join(', ')
        })
      }

      message.channel.send({ embed })
    } else {
      let text = util.format('> **%s**\n%s\n\n', message.translations.title, message.translations.description)

      for (let k = 0; k < categories.length; k++) {
        const category = categories[k]

        text += util.format('> %s\n', category)
        text += commandSets[category].join(', ') + '\n'
      }

      if (opts.preferences.errorTracing) {
        text += '\n' + message.translations._raw[message.member.preferences.language].system.EmbedLinksNotAvailable
      }

      message.channel.send(text)
    }
  }
}
