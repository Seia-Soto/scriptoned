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

  message.member.permission = structures.permission.accumulate(message.member)

  if (!commands[message.command]) return

  // NOTE: Exceptions that need returning message
  if (!message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')) { // NOTE: If app can't send message
    return message.member.send(util.format(
      translations.ko.system.MinimalPermissionNotAvailable,
      message.guild.name, message.channel.name
    ))
      .catch(null)
  }
  if (!message.member.permission.flag & structures.permission._internal[message.command.permission || 'everyone']) { // NOTE: Bitfield operation
    return message.channel.send(util.format(
      translations.ko.system.UserPermissionLeak,
      message.command, message.member.permission.readable
    ))
  }

  commands[message.command].fn(client, message, {
    // NOTE: NULL.
  })
}
