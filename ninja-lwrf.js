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
  /**
   * Perform action against a room.
   * @param  {[type]} id The id of any device in the room (untill rooms are
   *  properly supported)
   */
  scope.room = function(id, command) {
    var sending = JSON.stringify({ raw: command });
    //console.log('sending', id, sending);
    ninja.device(id).actuate(sending, function() {
      console.log('sent', arguments)
    });
  };

  scope.itach = function(id, command) {
    console.log('sending', id, command)
    ninja.device(id).actuate(command, function() {
      console.log('sent', arguments);
    });
  };

  scope.getDevices = function() {
    ninja.devices({}, function(err,devices) {

      console.log(err, devices)
    });
  }
  //scope.getDevices();
  return scope;
};
