const package = require('../../package')

module.exports = {
  name: 'debug',
  category: 'misc',
  permission: 'everyone',

  fn: (client, message, opts) => {
    message.reply('Generating report...')
      .then(previousMessage => {
        if (client.shard) {
          const details = [
            client.shard.fetchClientValues('guilds.size'),
            client.shard.fetchClientValues('channels.size'),
            client.shard.fetchClientValues('users.size'),
            client.shard.fetchClientValues('voiceConnections.size')
          ]

          Promise.all(details)
            .then(results => {
              previousMessage.edit(
`**${package.name}** v${package.version}
> ${package.description}

**Message**
> Command: ${message.command}
> Parameters: ${message.parameters.join(', ')}
> Latency (via edit): N/A

**Client**
> ID: ${client.user.id}
> Servers: ${results[0]}
> Channels: ${results[1]}
> Users: ${results[2]}
> Latency (via websocket heartbeat): ${client.ping}
> Uptime (in ms): ${Date.now() - client.startedAt}
> Shard: ${(client.shard.id + 1) + '/' + client.shard.count}
> Voice connections (total): ${results[3]}
> Voice connections (of this shard): ${client.voiceConnections.size}
`
              )
            })
        } else {
          previousMessage.edit(
`**${package.name}** v${package.version}
> ${package.description}

**Message**
> Command: ${message.command}
> Parameters: ${message.parameters.join(', ')}
> Latency (via edit): ${previousMessage.createdAt - Date.now()}

**Client**
> ID: ${client.user.id}
> Servers: ${client.guilds.size}
> Channels: ${client.channels.size}
> Users: ${client.voiceConnections.size}
> Latency (via websocket heartbeat): ${client.ping}
> Uptime (in ms): ${Date.now() - client.startedAt}
> Shard: none
> Voice connections: ${client.voiceConnections.size}
`
          )
        }
      })
  }
}
