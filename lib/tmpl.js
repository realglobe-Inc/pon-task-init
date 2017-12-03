/**
 * Ponfile template
 * @function tmpl
 * @param {Object} [config={}]
 * @returns {string}
 */
'use strict'

module.exports = function tmpl (config = {}) {
  return `/**
 * Pon tasks
 * @file Ponfile
 * @see https://gitlab.com/realglobe-Inc/pon
 */
'use strict'

const pon = require('pon')

module.exports = pon({

  // Call \`pon hi\` to make sure it works fine
  hi: () => console.log('Hi, it works fine!')
    
})
`
}