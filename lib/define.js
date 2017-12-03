/**
 * Define task
 * @function define
 * @param {Object} [options={}] - Optional settings
 * @param {boolean} [options.force] - Force to write
 * @returns {function} Defined task
 */
'use strict'

const path = require('path')
const {statAsync, writeFileAsync, mkdirpAsync} = require('asfs')
const tmpl = require('./tmpl')

/** @lends define */
function define (options = {}) {
  const {
    force = false,
    filename = 'Ponfile.js',
    dirname = process.cwd()
  } = options

  async function task (ctx) {
    const {logger} = ctx
    const dest = path.resolve(dirname, filename)
    const exists = !!await statAsync(dest).catch((e) => false)
    if (exists && !force) {
      console.warn(`${filename} already exists`)
      return
    }
    await mkdirpAsync(path.dirname(dest))
    console.log('dest', dest, tmpl({}))
    await writeFileAsync(dest, tmpl({}))
    logger.debug(`File generated: ${path.relative(process.cwd(), dest)}`)
  }

  return Object.assign(task,
    // Define sub tasks here
    {}
  )
}

module.exports = define
