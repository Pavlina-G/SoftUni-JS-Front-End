function calculateSpeed(distance, hour, min, sec) {
    let time = hour * 3600 + min * 60 + sec
    let speed = distance / time

    console.log(speed.toFixed(6));
     
}

calculateSpeed(100, 1, 20, 20);
calculateSpeed(2500, 5, 56, 23);
calculateSpeed(600, 7, 35, 55);