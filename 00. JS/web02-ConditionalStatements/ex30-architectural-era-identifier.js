function getEra(year, material) {
    let era;

    if (year < 500 && material==='stone') {
        era = 'Ancient';
    } else if (year >=500 && year <= 1500 && material==='stone') {
        era = 'Medieval';
    } else if (year >= 1500 && year <= 1800 && material==='wood') {
        era = 'Colonial';
    } else if (year >= 1800 && year <=1900 && material==='steel') {
        era = 'Industrial';
    } else if (year > 1900 && material==='steel') {
        era = 'Modern';
    } else {
        era = 'Uncertain';
    }
    console.log(era);
}

getEra(300, 'stone');
getEra(1500, 'wood');
// getEra(500, 'wood');
getEra(1500, 'stone');
getEra(2000, 'steel');
getEra(1100, 'wood');
