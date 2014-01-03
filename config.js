module.exports = {
        rooms: {
            LIVING: {
                id: '4512BB000219_R1D5_0_224',
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
            OFF: 'oFF',
            ON: 'oN',
            MOOD1: 'mOOD1',
            MOOD2: 'mooD@2',
            MOOD3: 'mOOD3',

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
