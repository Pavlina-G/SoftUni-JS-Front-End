function showClimateZone(latitudeValue, hemisphere) {
    let latitude = Math.abs(latitudeValue);
    let zone;

    if (latitude === 0) {
        zone = 'Equator';
    } else if (latitude <= 23.5) {
        zone = 'Tropic Zone';
    }
    else if (latitude <= 66.5) {
        zone = 'Temperate Zone';

    } else {
        zone = 'Arctic Zone';
    }
    console.log(zone);
}

showClimateZone(70, 'N');
showClimateZone(45, 'S');
showClimateZone(10, 'N');
showClimateZone(0, 'N');
showClimateZone(-85, 'S');