var views = require('co-views');
var koa = require('koa');
var app = module.exports = koa();
var send = require('koa-send');
var route = require('koa-route');
var config = require('./config');
var lwrf = require('./ninja-lwrf')(process.env.NINJAKEY);
lwrf.getDevices();
var render = views(__dirname + '/views', { ext: 'jade' });

app.use(route.get('/', function *(){
  this.body = yield render('layout', {  });
}));

app.use(route.get('/state/set/:state', function *(stateName){
  var state = config.states[stateName];

  var commands = state.commands;
  for(room in commands) {
    var roomId = config.rooms[room].id;
    var command = config.commands[commands[room]];
      console.log('=->', roomId, command)
    lwrf[roomId].room(command);
  }
  this.body = 'hello'
}));


app.use(function *(){
  yield send(this, this.path, { root: __dirname + '/public' });
});

// render

if (!module.parent) app.listen(4000);
