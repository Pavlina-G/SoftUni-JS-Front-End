function roadRadar(speed, area) {
    let limit = 0;
    let status = '';


    if (area === 'motorway') {
        limit = 130;
    } else if (area === 'interstate') {
        limit = 90;
    } else if (area === 'city') {
        limit = 50;
    } else {
        limit = 20;
    }
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    } else {
        let exceedLimid = speed - limit
        if (exceedLimid <= 20) {
            status = 'speeding';
        } else if (exceedLimid <= 40) {
            status = 'excessive speeding'
        } else {
            status = 'reckless driving'
        }
        console.log(`The speed is ${exceedLimid} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');