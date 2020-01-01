module.exports = {
  /* Discord */client: {
    token: '',
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
      users: {
        language: 'ko',
        updateNotifying: 1,
        errorTracing: 1
      },
      guilds: {
        prefix: 'sn',
        errorTracing: 1,
        userVerification: 0
      }
    }
  }
}
