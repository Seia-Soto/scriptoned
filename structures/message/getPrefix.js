module.exports = (opts) => {
  for (let k = 0; k < opts.availablePrefixes.length; k++) {
    if (opts.content.startsWith(opts.availablePrefixes[k])) {
      return opts.availablePrefixes[k]
    }
  }

  return false
}
