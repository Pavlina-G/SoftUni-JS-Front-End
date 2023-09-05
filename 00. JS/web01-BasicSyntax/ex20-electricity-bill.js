function elBill(units, rate) {
    let fixedCharge = 10;
    let totalBill = (units * rate) + fixedCharge;

    console.log(totalBill.toFixed(2));
}

elBill(100, 1.0);
elBill(200, 1.0);
elBill(150, 1.1);