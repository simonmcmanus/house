var views = require('co-views');
var koa = require('koa');
var app = module.exports = koa();
var send = require('koa-send');
var route = require('koa-route');
var config = require('./config');
var lwrf = require('./ninja-lwrf')(process.env.NINJAKEY);
var render = views(__dirname + '/views', { ext: 'jade' });

console.log('he');
app.use(route.get('/', function *(){
  console.log('her');
  this.body = yield render('layout', {});
}));

app.use(route.get('/state/set/:state', function *(stateName){
  console.log('set state route', stateName)
  var state = config.states[stateName];

  var commands = state.commands;
  for(room in commands) {
    var roomId = config.rooms[room].handle;// handle is wrong here.
    var command = config.commands[commands[room]];
    if(roomId) {
      lwrf.room(roomId, command);
    }
  }
  this.body = 'done'
}));


app.use(function *(){
  yield send(this, this.path, { root: __dirname + '/public' });
});

// render

if (!module.parent) app.listen(4000);
