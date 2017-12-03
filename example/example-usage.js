'use strict'

const pon = require('pon')
const ponTaskInit = require('pon-task-init')

;(async () => {
  let run = pon({
    'init': ponTaskInit({force: false})
  })

  run('init')
}).catch((err) => console.error(err))
