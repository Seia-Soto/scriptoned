const util = require('util')
const commands = require('../commands')
const structures = require('../structures')
const translations = require('../translations')
const preferences = require('../preferences')

module.exports = async (client, message) => {
  const targeted =
    (!message.author.bot) && // NOTE: If the user is bot
    (message.channel.type !== 'dm') && // NOTE: If the channel is DM
    (message.content !== '') // NOTE: If the message is only contains embed such as webhook
  if (!targeted) return

  message.member.preferences = await structures.preferences.get('users', message.member.id)
  message.guild.preferences = await structures.preferences.get('guilds', message.guild.id)

  message.prefix = await structures.message.getPrefix({
    content: message.content,
    availablePrefixes: [
      util.format('<@!%d>', client.id),
      message.guild.preferences.prefix || preferences.app.defaults.prefix
    ]
  })

  if (!message.prefix) return

  message.parameters = await message.content.replace(message.prefix, '').trim().split(' ')
  message.command = await message.parameters.shift().toLowerCase()

  if (!commands[message.command]) return

  message.translations = translations[message.member.preferences.language].commands[commands[message.command]./* original */name] || {}
  message.translations._raw = translations

  message.member.permission = await structures.permission.accumulate(message.member)

  // NOTE: Exceptions that need returning message
  if (
    !message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES') && // NOTE: If app can't send message
    message.member.preferences.errorTracing // NOTE: If user enabled error tracing
  ) {
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
    /* conseq */preferences: {
      errorTracing: message.guild.preferences.errorTracing && message.member.preferences.errorTracing
    }
  })
}
