const util = require('util')
const { set } = require('../../structures/preferences')

module.exports = {
  name: 'switch-updatenotifying',
  category: 'preferences',
  permission: 'everyone',
  aliases: [
    'switchUpdateNotifying',
    'switch-updatenotify',
    's-updatenotifying',
    's-updatenotify'
  ],

  fn: async (client, message, opts) => {
    const translations = message.translations._raw[message.member.preferences.language].preferences

    message.channel.send(translations.switching)
      .then(async status => {
        message.member.preferences.updateNotifying = !message.member.preferences.updateNotifying

        const error = await set('users', message.member.id, message.member.preferences)

        if (error) {
          return status.edit(translations.switchFailed)
        } else {
          status.edit(util.format(
            translations.switchedTo,
            translations.names.user.updateNotifying,
            message.member.preferences.updateNotifying
              ? translations.enabled
              : translations.disabled
          ))
        }
      })
  }
}
