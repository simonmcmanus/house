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
    itach: {
        id: '4512BB000219_iTachIR2222222222222_0_14',
        TVONOFF: 'sendir,1:3,1,37878,1,1,11,64,21,1775,171,171,21,64,21,64,21,64,21,21,21,21,21,21,21,21,21,21,21,64,21,64,21,64,21,21,21,21,21,21,21,21,21,21,21,21,21,64,21,21,21,21,21,21,21,21,21,21,21,21,21,64,21,21,21,64,21,64,21,64,21,64,21,64,21,64,21,3149,4,891,4,84,4,84,4,339,4,40,4,41,4,41,4,41,4,41,4,41,4,84,4,40,4,84,4,83,4,83,4,83,4,83,4,83,4,3787'
    },
    rooms: {
        LIVING: {
            id: 1,
            handle: '4512BB000219_R1D1_0_224', //Can be the id of any device in the room.
            name: 'Living Room'
        },
        HALL: {
            id: 3,
            handle: '4512BB000219_R2D5_0_224', //Can be the id of any device in the room.
            name: 'Hall'
        },
        BEDROOM: {
            id: 6,
            handle: '4512BB000219_R3D1_0_224', //Can be the id of any device in the room.
            name: 'Bedroom'
        },
    },
    channels: {
        BBC1: {
            roviDisplayName: 'BBC1LOND',
            irCode: ''
        },
        BBC2: {

        }
    },
    commands: {
        OFF: 'R1Fa',
        MOOD1: 'R1FmP1',
        MOOD2: 'R1FmP2',
        MOOD3: 'R1FmP3'
    },
    states:{
        'off': {
            name: 'Power down the house',
            description: 'Turn every darn thing off.',
            commands: {
                LIVING: 'OFF',
                BEDROOM: 'OFF',
                LANDING: 'OFF',
                HALL: 'OFF',
            },
            itach: [
                'TVONOFF'
            ]
        },
        'tv': {
            name: 'TV time',
            description: 'Nice and cosy.',
            commands: {
                LIVING: 'MOOD2',
                BEDROOM: 'OFF',
                LANDING: 'OFF',
                GARDEN: 'OFF',
                HALL: 'OFF',
                KITCHEN: 'OFF'
            },
            itach: [
                'TVONOFF'
            ]

        },
        'morning': {
            name: 'Wake Up!',
            description: 'Living room, landing, bedroom and landing lights on.',
            commands: {
                LIVING: 'MOOD1',
                BEDROOM: 'MOOD1',
                LANDING: 'MOOD1',
                GARDEN: 'MOOD1',
                HALL: 'MOOD1',
                KITCHEN: 'MOOD1'
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