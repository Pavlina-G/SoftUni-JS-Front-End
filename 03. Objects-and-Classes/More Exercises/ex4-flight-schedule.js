function flightSchedule(flightInfo) {
    let [flights, updates, final] = flightInfo
    let finalStatus = final[0];
    let initialStatus = 'Ready to fly';
    let destinations = {}

    for (const flight of flights) {
        [num, city] = flight.split(' ');
        destinations[num] = {Destination: city, Status: initialStatus}
    }

    for (const update of updates) {
        [number, updatedStatus] = update.split(' ')
        if (number in destinations && updatedStatus !== 'Ready to fly') {
            destinations[number].Status = updatedStatus;
        }
    }

    for (const destinationsKey in destinations) {
        if (destinations[destinationsKey].Status === finalStatus) {
            console.log(destinations[destinationsKey]);
        }
    }

}

flightSchedule([['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
        ['DL2120 Cancelled',
            'WN612 Cancelled',
            'WN1173 Cancelled',
            'SK430 Cancelled'],
        ['Cancelled']
    ]
)

flightSchedule([['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
        ['DL2120 Cancelled',
            'WN612 Cancelled',
            'WN1173 Cancelled',
            'SK330 Cancelled'],
        ['Ready to fly']
    ]
)