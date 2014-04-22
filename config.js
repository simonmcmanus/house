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
            id: 2,
            handle: '4512BB000219_R2D5_0_224', //Can be the id of any device in the room.
            name: 'Hall'
        },
        BEDROOM: {
            id: 3,
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
        OFF: 'Fa',
        MOOD1: 'FmP1',
        MOOD2: 'FmP2',
        MOOD3: 'FmP3'
    },
    states:{
        'off': {
            name: 'Power down the house',
            description: 'Turn every darn thing off.',
            commands: {
                LIVING: 'OFF',
                BEDROOM: 'OFF',
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
                HALL: 'OFF'
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
                HALL: 'MOOD1'
            }
        },
        'wfh': {
            name: 'Working from home',
            description: 'Nice and bright. No distractions.',
            commands: {
                LIVING: 'MOOD2',
                BEDROOM: 'OFF',
                HALL: 'OFF'
            }
        },
        'dog': {
            name: 'Dog home alone',
            description: 'Poor bogdan at home on his own.',
            commands: {
                LIVING: 'MOOD1',
                BEDROOM: 'OFF',
                HALL: 'ON'
            }

        },
        'bed': {
            name: 'Going to Bed',
            description: 'Time for bed. Low lights.',
            commands: {
                LIVING: 'MOOD1',
                BEDROOM: 'MOOD1',
                HALL: 'OFF',
            }
        }
    }
};
