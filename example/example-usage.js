'use strict'

const pon = require('pon')
const ponTaskInit = require('pon-task-init')

;(async () => {
  let run = pon({
    myTask01: ponTaskInit()
  })

  run('myTask01')
}).catch((err) => console.error(err))
