function calcCharges(weight, dimentions) {
    let fee = 0;
    let allowedDimentions = 158
    let diff = dimentions - allowedDimentions

    if (weight > 50 && (diff > 20)) {
        fee += 50
    }
    if (weight > 50) {
        fee += 100;
    }
    if (dimentions > allowedDimentions) {
        
        if (diff < 21) {
            fee += 50;
        } else if (diff < 51) {
            fee += 100;
        } else if (diff > 50) {
            fee += 200
        }
    }

    console.log(fee);
}

calcCharges(52, 160);
calcCharges(48, 180);
calcCharges(55, 190);
