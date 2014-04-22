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
        KITCHEN: {
            id: 2,
            handle: '4512BB000219_R1D1_0_224', //Can be the id of any device in the room.
            name: 'Kitchen'
        },
        HALL: {
            id: 3,
            handle: '4512BB000219_R1D1_0_224', //Can be the id of any device in the room.
            name: 'Hall'
        },
        LANDING: {
            id: 4,
            handle: '4512BB000219_R1D1_0_224', //Can be the id of any device in the room.
            name: 'Stairs/Landing'
        },
        GARDEN: {
            id: 5,
            handle: '4512BB000219_R1D1_0_224', //Can be the id of any device in the room.
            name: 'Back Garden'
        },
        BEDROOM: {
            id: 6,
            handle: '4512BB000219_R1D1_0_224', //Can be the id of any device in the room.
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
                GARDEN: 'OFF',
                HALL: 'OFF',
                KITCHEN: 'OFF'
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
