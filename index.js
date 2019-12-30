const debug = require('debug')
const Discord = require('discord.js')
const handlers = require('./handlers')
const preferences = require('./preferences')

const client = new Discord.Client(preferences.client.options)

client.startedAt = Date.now()

client.once('ready', () => {
  const cid = client.shard ? 'shard#' + client.shard.id : 'app'
  const log = debug('scriptoned:' + cid)

  client.log = log

  log('Logged in as %s(%d)', client.user.tag, client.user.id)

  const eventNames = Object.keys(handlers)

  for (let k = 0; k < eventNames.length; k++) {
    log('Listening `%s` event.', eventNames[k])

    client.on(eventNames[k], handlers[eventNames[k]].bind({}, client))
  }
})
client.login(preferences.client.token)
