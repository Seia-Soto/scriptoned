const interpermissions = require('./_internal')

const interpermissionsSerialized = Object.keys(interpermissions)

module.exports = member => {
  const permission = {
    available: member.permissions.toArray(),
    readable: 'everyone',
    flag: 0
  }

  for (let k = 0; k < interpermissionsSerialized.length; k++) {
    const key = interpermissionsSerialized[k]

    if (permission.available.includes(key)) {
      permission.readable = key
      permission.flag = permission.flag | interpermissions[key]
    }
  }

  return permission
}
