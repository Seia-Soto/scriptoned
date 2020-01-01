// NOTE: general
module.exports.help = require('./general/help')

// NOTE: misc
module.exports.debug = require('./misc/debug')
module.exports.uptime = require('./misc/uptime')

// NOTE: preferences
module.exports.switchUpdateNotifying = require('./preferences/switchUpdateNotifying')
module.exports.switchErrorTracing = require('./preferences/switchErrorTracing')
module.exports.switchLanguage = require('./preferences/switchLanguage')

// NOTE: flow
module.exports.flow = require('./flow/flow')
module.exports.flowAddGroup = require('./flow/flow-add-group')
