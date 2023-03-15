function piccolo(info) {
    let parking = {};

    for (const el of info) {
        [command, number] = el.split(', ')
        if (command === 'IN') {
            parking[number] = 0;
        } else {
            if (number in parking) {
                delete parking[number]
            }
        }
    }
    let result = Object.keys(parking).sort(
        (a, b) => {
            return a.localeCompare(b)
        }
    ).join('\n')

    if (result) {
        console.log(result);
    } else {
        console.log(`Parking Lot is Empty`);
    }

}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);