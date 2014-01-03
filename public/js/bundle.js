;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
var conf = require('./../../config.js')

$(document).ready(function() {





    function okClicked() {
        console.log('ok clicked', state)

        $.ajax('/state/set/' + state.id)
    }
    function cancelClicked() {
        console.log('cancel clicked')
    }

    var tt = new TopcoatTouch();
    tt.goTo('home');
    $('.state').click(function() {
        state = conf.states[this.id];
        state.id = this.id;
        tt.showDialog('<h3>' + state.name + '</h3><small><small> ' + state.description + ' </small> </small><br/>',
            {
              OK: okClicked,
              Cancel: cancelClicked
            });
    });
});

},{"./../../config.js":2}],2:[function(require,module,exports){
module.exports = {
        rooms: {
            LIVING: {
                id: 1,
                name: 'Living Room'
            },
            KITCHEN: {
                id: 2,
                name: 'Kitchen'
            },
            HALL: {
                id: 3,
                name: 'Hall'
            },
            LANDING: {
                id: 4,
                name: 'Stairs/Landing'
            },
            GARDEN: {
                id: 5,
                name: 'Back Garden'
            },
            BEDROOM: {
                id: 6,
                name: 'Bedroom'
            }
        },
        commands: {
            OFF: '',
            ON: '',
            MOOD1: '',
            MOOD2: '',
            MOOD3: '',

        },
        states:{
            'off': {
                name: 'Power down the house',
                description: 'Turn every darn thing off.',
                commands: {
                    ALL:'F0'
                }
            },
            'morning': {
                name: 'Wake Up!',
                description: 'Living room, landing, bedroom and landing lights on.',
                commands: {
                    LIVING: 'ON',
                    BEDROOM: 'ON',
                    LANDING: 'ON',
                    GARDEN: 'OFF',
                    HALL: 'ON',
                    KITCHEN: 'ON'
                }
            },
            'tv': {
                name: 'TV time',
                description: 'Nice and cosy.',
                commands: {
                    LIVING: 'MOOD1',
                    BEDROOM: 'OFF',
                    LANDING: 'OFF',
                    GARDEN: 'OFF',
                    HALL: 'OFF',
                    KITCHEN: 'OFF'
                }
            },
            'wfh': {
                name: 'Working from home',
                description: 'Nice and bright. No distractions.',
                commands: {
                    LIVING: 'MOOD2',
                    BEDROOM: 'OFF',
                    LANDING: 'OFF',
                    GARDEN: 'OFF',
                    HALL: 'OFF',
                    KITCHEN: 'OFF'
                }
            },
            'dog': {
                name: 'Dog home alone',
                description: 'Poor bogdan at home on his own.',
                commands: {
                    LIVING: 'MOOD1',
                    BEDROOM: 'OFF',
                    LANDING: 'OFF',
                    GARDEN: 'OFF',
                    HALL: 'ON',
                    KITCHEN: 'OFF'
                }

            },
            'bed': {
                name: 'Going to Bed',
                description: 'Time for bed. Low lights.',
                commands: {
                    LIVING: 'MOOD1',
                    BEDROOM: 'MOOD1',
                    LANDING: 'ON',
                    GARDEN: 'OFF',
                    HALL: 'OFF',
                    KITCHEN: 'OFF'
                }
            }
        }
    };

},{}]},{},[1])
;