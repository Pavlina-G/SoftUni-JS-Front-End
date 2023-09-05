function costOffice(firstPrice) {

    let secondPrice = firstPrice * 0.80;
    // let secondPrice = firstPrice - firstPrice*0.20;
    let thirdPrice = (firstPrice + secondPrice) * 1.15;
    let totalCost = firstPrice + secondPrice + thirdPrice

    console.log(totalCost.toFixed(3));
}

costOffice(380);
costOffice(720.50);
costOffice(455.30);
