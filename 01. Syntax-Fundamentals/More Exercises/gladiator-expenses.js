function gladiatorExpenses(lossCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let counter = 0;

    for (let i = 1; i < lossCount + 1; i++) {
        if (i % 2 === 0) {
            expenses += helmetPrice;
            if (i % 3 === 0) {
                expenses += swordPrice;
                expenses += shieldPrice;
                counter += 1;
                if (counter % 2 === 0) {
                    expenses += armorPrice;
                }
            }
        } else if (
            i % 3 === 0) {
            expenses += swordPrice;
        }
    }
    return `Gladiator expenses: ${expenses.toFixed(2)} aureus`
}


console.log(gladiatorExpenses(7,
    2,
    3,
    4,
    5
));
console.log(gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
));