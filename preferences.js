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
  }
}
