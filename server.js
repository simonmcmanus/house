'use strict';

var views = require('co-views');
var koa = require('koa');
var app = module.exports = koa();
var send = require('koa-send');
var route = require('koa-route');
var config = require('./config');
var lwrf = require('./ninja-lwrf')(process.env.NINJAKEY);
var render = views(__dirname + '/views', { ext: 'jade' });
//var auth = require('koa-basic-auth');

// app.use(function *(next){
//   try {
//     yield next;
//   } catch (err) {
//     this.status = 401;
//     this.body = 'Please login.';
//     this.set('WWW-Authenticate', 'Basic');
//   }
// });

console.log('username is:', process.env.HOUSEUSER);
//app.use(auth({ name: process.env.HOUSEUSER, pass: process.env.HOUSEPASSWORD}));

app.use(route.get('/', function *(){
  this.body = yield render('layout', config);
}));


app.use(route.get('/state/set/:state', function *(stateName){

  var state = config.states[stateName];

  var commands = state.commands;
  for(var room in commands) {
    var roomId = config.rooms[room].handle;// handle is wrong here.
    var command = 'R' + config.rooms[room].id + config.commands[commands[room]];
    if(roomId) {
      lwrf.room(roomId, command);
    }
  }

  var itach = state.itach;
  if(itach) {
    for(var a = 0; a < itach.length; a++) {
      lwrf.itach(config.itach.id, config.itach[itach[a]]);
    }
  }

  this.body = 'done'
}));


app.use(function *(){
  yield send(this, this.path, { root: __dirname + '/public' });
});

if (!module.parent) {
  var port =  process.env.PORT || 5000;
  console.log('Running on port:', port)
  app.listen(port);
}
