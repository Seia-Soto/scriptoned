const util = require('util')
const moment = require('moment')

module.exports = {
  name: 'uptime',
  category: 'misc',
  permission: 'everyone',

  fn: async (client, message, opts) => {
    const language = message.member.preferences.language

    moment.locale(language)

    message.channel.send(util.format(
      message.translations.fromNow,
      moment(client.startedAt).fromNow()
    ))
  }
}
