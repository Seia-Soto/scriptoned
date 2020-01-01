const refs = require('./refs')

const names = Object.keys(refs)

for (let k = 0; k < names.length; k++) {
  const command = refs[names[k]]
  const basicCondition =
    (command.name) &&
    (command.fn)

  if (!basicCondition) continue

  command.aliases = command.aliases || []

  module.exports[command.name] = command

  for (let i = 0; i < command.aliases.length; i++) {
    const alias = Object.assign({}, command)

    alias.isAlias = true

    module.exports[command.aliases[i]] = alias
  }
}
