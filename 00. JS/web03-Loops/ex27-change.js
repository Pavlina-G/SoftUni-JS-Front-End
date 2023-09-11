function change(amount) {

    let coins = {
        'twoLv': 0,
        'oneLv': 0,
        'fiftySt': 0,
        'twentySt': 0,
        'tenSt': 0,
        'fiveSt': 0,
        'twoSt': 0,
        'oneSt': 0
    }

    while (amount >= 0) {
        if (amount >= 2) {
            coins.twoLv = Math.floor(amount / 2);
            amount -= coins.twoLv * 2
        } else if (amount === 1 || (amount >= 1 && amount <= 1.99)) {
            coins.oneLv = 1;
            amount -= 1;
        } else if (amount < 1 && amount >= 0.50) {
            coins.fiftySt = 1;
            amount = (amount - 0.50);
        } else if (amount < 1 && amount >= 0.20) {
            coins.twentySt = Math.floor(amount / 0.20);
            amount -= 0.20 * coins.twentySt
        } else if (amount < 1 && amount >= 0.10) {
            coins.tenSt = Math.floor(amount / 0.10);
            amount -= 0.10 * coins.tenSt
        } else if (amount < 1 && amount >= 0.05) {
            coins.fiveSt = Math.floor(amount / 0.05);
            amount -= 0.05 * coins.fiftySt
        } else if (amount < 1 && amount >= 0.02) {
            coins.twoSt = Math.floor(amount / 0.02);
            amount -= 0.02 * coins.twoSt;
        } else {
            coins.oneSt = 1;
            amount -= 0.01;
        }
    }


    let result = coins.twoLv + coins.oneLv + coins.fiftySt + coins.twentySt
        + coins.tenSt + coins.fiveSt + coins.twoSt + coins.oneSt;

    console.log(result);
}

change(1.23);
change(2);
change(0.56);
change(2.73);
// change(3.73);