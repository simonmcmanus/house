var views = require('co-views');
var koa = require('koa');
var app = module.exports = koa();
var send = require('koa-send');
var route = require('koa-route');
var config = require('./config');
var lwrf = require('./ninja-lwrf')(process.env.NINJAKEY);
var render = views(__dirname + '/views', { ext: 'jade' });
var auth = require('koa-basic-auth');

app.use(function *(next){
  try {
    yield next;
  } catch (err) {
    this.status = 401;
    this.body = 'Please login.';
    this.set('WWW-Authenticate', 'Basic');
  }
});

console.log('username is', process.env.HOUSEUSER);


app.use(auth({ name: process.env.HOUSEUSER, pass: process.env.HOUSEPASSWORD}));

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

if (!module.parent) app.listen(process.env.PORT || 4000);
