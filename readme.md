# cordova-deviceready [![Build Status](https://travis-ci.org/ajoslin/cordova-deviceready.svg?branch=master)](https://travis-ci.org/ajoslin/cordova-deviceready)

> Listen for the cordova [deviceready callback](http://cordova.apache.org/docs/en/latest/cordova/events/events.html#page-toc-source) in any environment


## Install

```
$ npm install --save cordova-deviceready
```


## Usage

```js
var onDeviceReady = require('cordova-deviceready')

onDeviceReady(function () {
  // deviceready has been called
})
```

## API

#### `cordovaDeviceready(callback)` -> `void`

##### callback

*Required*
Type: `function`

Function to be called once the device is ready. If the device is already ready, it will be called instantly.

## License

MIT © [Andrew Joslin](http://ajoslin.com)
