// Include our ninja-blocks library
var ninjaBlocks = require('ninja-blocks');
var _ = require('lodash');

module.exports = function(token) {

  // Instantiate a ninja object with your API token from https://a.ninja.is/hacking
  var ninja = ninjaBlocks.app({
    user_access_token:token
  });


  var scope = {
    rooms: {},
    devices: {}
  };
  scope.room = function() {
    ninja.device('4512BB000219_R1D1_0_224').actuate(JSON.stringify(out));

  };

  scope.getDevices = function() {
    ninja.devices({ device_type: 'light'}, function(err,devices) {

      console.log(devices)
    });
  }

  return scope;
};
