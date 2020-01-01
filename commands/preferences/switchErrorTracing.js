const util = require('util')
const { set } = require('../../structures/preferences')

module.exports = {
  name: 'switch-errortracing',
  category: 'preferences',
  permission: 'everyone',
  aliases: [
    'switcherrortracing',
    'switch-errortrace',
    'switch-errortracking',
    'switch-errortrack',
    's-errortracing',
    's-errortrace',
    's-errortracking',
    's-errortrack'
  ],

  fn: async (client, message, opts) => {
    const translations = message.translations._raw[message.member.preferences.language].preferences

    message.channel.send(translations.switching)
      .then(async status => {
        message.member.preferences.errorTracing = !message.member.preferences.errorTracing

        const error = await set('users', message.member.id, message.member.preferences)

        if (error) {
          return status.edit(translations.switchFailed)
        } else {
          status.edit(util.format(
            translations.switchedTo,
            translations.names.user.errorTracing,
            message.member.preferences.errorTracing
              ? translations.enabled
              : translations.disabled
          ))
        }
      })
  }
}
