var future = {
    heroHand: ['Jh', 'Js'],
    villainHand: ['7c', '8c'],
    flop: ['Tc', 'Jc', '4s'],
    turn: 'Ac',
    river:'9d',
    button: 'hero',
    decisionTree: {
        preflop: {
            heroStarts : true,
            heroActions: {
                // hero bet sizes : villain responses
                '0': 'invalid: hero must at least call',
                '1': 'check',
                '2 - 3': 'invalid: hero must at least double big blind',
                '4 - 8': 'call',
                '9 - 100': 'fold'
            }
        },
        flop: {
            heroStarts : false,
            villainAction :
        },
        turn: {

        },
        river: {

        }
    }
}