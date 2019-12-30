module.exports = {
  /* Discord */client: {
    token: 'NjMxNDM3MTM2ODAxMDM4MzQ2.XfoP_w.WHKwU4Zt4B0RM3Ku4ooWpx98JMA',
    options: {
      apiRequestMethod: 'sequential',
      disableEveryone: true,
      restWsBridgeTimeout: 1000 * 12,
      restTimeOffset: 250,
      retryLimit: Infinity,
      disabledEvents: [
        'TYPING_START'
      ]
    }
  },
  database: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'scriptoned'
    },
    pool: {
      min: 2,
      max: 16
    }
  },
  app/* scriptoned */: {
    defaults: {
      prefix: 'sn'
    }
  }
}
