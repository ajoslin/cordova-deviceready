'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')
var EventTarget = require('dom-event-target')

test('no document (node)', function (t) {
  var onDeviceReady = proxyquire('./', {
    'global/document': {}
  })

  // Should not be called
  onDeviceReady(t.fail)
  t.end()
})

test('only called once', function (t) {
  var document = new EventTarget()
  var onDeviceReady = proxyquire('./', {
    'global/document': document
  })

  t.plan(3)

  onDeviceReady(function () {
    t.pass('called once for listener')
  })
  onDeviceReady(function () {
    t.pass('called twice for listener')

    onDeviceReady(function () {
      t.pass('called because it\'s already ready')
    })
  })

  document.send('deviceready')
})
