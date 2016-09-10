'use strict'

var ready = false
var document = require('global/document')

module.exports = function onDeviceReady (listener) {
  if (!document || !document.addEventListener) return
  if (ready) return setTimeout(listener, 0)

  document.addEventListener('deviceready', function () {
    listener()
    ready = true
  })
}
