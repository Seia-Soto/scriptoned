const debug = require('debug')
const Discord = require('discord.js')
const util = require('util')
const handlers = require('./handlers')
const preferences = require('./preferences')

const client = new Discord.Client(preferences.client.options)

client.once('ready', () => {
  const cid = client.shard ? 'shard#' + client.shard.id : 'app',
        log = debug('scriptoned:' + cid)

  client.log = log

  client.log('Client is now ready state and listening for events.')

  const eventNames = Object.keys(handlers)

  for (let k = 0; k < eventNames.length; k++) {
    log('Listening `%s` event from client.', eventNames[k])

    client.on(eventNames[k], handlers[eventNames[k]].bind(null, client))
  }
})
client.login(preferences.client.token)
