const util = require('util')
const commands = require('../commands')
const structures = require('../structures')
const translations = require('../translations')
const preferences = require('../preferences')

module.exports = (client, message) => {
  const targeted =
    (!message.author.bot) && // NOTE: If the user is bot
    (message.channel.type !== 'dm') && // NOTE: If the channel is DM
    (message.content !== '') // NOTE: If the message is only contains embed such as webhook
  if (!targeted) return

  message.prefix = structures.message.getPrefix({
    content: message.content,
    availablePrefixes: [
      util.format('<@!%d>', client.id),
      preferences.app.defaults.prefix
    ]
  })

  if (!message.prefix) return

  message.parameters = message.content.replace(message.prefix, '').trim().split(' ')
  message.command = message.parameters.shift()

  if (!commands[message.command]) return
  if (!message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')) { // NOTE: If app can't send message
    return message.member.send(util.format(
      translations.ko.system.MinimalPermissionNotAvailable,
      message.guild.name, message.channel.name
    ))
  }

  commands[message.command].fn(client, message, {
    // NOTE: NULL.
  })
}
