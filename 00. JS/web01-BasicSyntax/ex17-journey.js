function calcDistance(firstCar, secondCar) {
    let time = 3
    let firstCarKm = firstCar * (time + 2)
    let secondCarKm = secondCar * time

    let distance = firstCarKm - secondCarKm

    console.log(Math.abs(distance));
}

calcDistance(81, 120);
calcDistance(100, 90);
calcDistance(75, 90);
calcDistance(20, 190);