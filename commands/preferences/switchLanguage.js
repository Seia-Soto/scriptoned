const util = require('util')
const { set } = require('../../structures/preferences')

module.exports = {
  name: 'switch-language',
  category: 'preferences',
  permission: 'everyone',
  aliases: [
    'switchlanguage',
    's-language',
    'language',
    'lang'
  ],

  fn: async (client, message, opts) => {
    const translations = message.translations._raw[message.member.preferences.language].preferences
    const newLanguage = message.parameters[0] // NOTE: Get first parameter due to the format of language code <language._languageCode>

    if (!message.translations._raw[newLanguage]) {
      return message.channel.send(util.format(
        message.translations.notAvailable,
        newLanguage || '(empty)',
        Object.values(message.translations._raw).map(language => {
          return util.format(
            '%s: %s (%s)',
            language._languageCode,
            language._languageReadable,
            language._languageReadableNative
          )
        }).join('\n> ') // NOTE: First item already has quote sign
      ))
    }

    message.channel.send(translations.switching)
      .then(async status => {
        message.member.preferences.language = newLanguage

        const error = await set('users', message.member.id, message.member.preferences)

        if (error) { // NOTE: If there is database error <AsyncFunction: set>
          return status.edit(translations.switchFailed)
        } else {
          status.edit(util.format(
            translations.switchedTo,
            translations.names.user.language,
            newLanguage
          ))
        }
      })
  }
}
