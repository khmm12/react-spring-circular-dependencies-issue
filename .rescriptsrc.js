const path = require('path')
const resolveFrom = require('resolve-from')

module.exports = [
  config => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        react$: resolveFrom(path.resolve('node_modules'), 'react'),
        'react-dom$': resolveFrom(path.resolve('node_modules'), 'react-dom')
      }
    }
    return config
  }
]
