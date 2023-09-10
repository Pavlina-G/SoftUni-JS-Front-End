function calcExpenses(lostGames, headsetPrice, mousePrice, keyboardPrice, displayPrice) {
    let trashes = {
        'headset': 0,
        'mouse': 0,
        'keyboard': 0,
        'display': 0,
    }

    for (let i = 1; i < lostGames + 1; i++) {
        if (i % 2 === 0) {
            trashes.headset += 1;
        }
        if (i % 3 === 0) {
            trashes.mouse += 1;
        }

        if (i % 2 === 0 && i % 3 === 0) {
            trashes.keyboard += 1;
            if (trashes.keyboard % 2 === 0) {
                trashes.display += 1;
            }
        }

    }
    let totalExpenses = trashes.headset * headsetPrice +
        trashes.mouse * mousePrice + trashes.keyboard * keyboardPrice +
        trashes.display * displayPrice;

    console.log(`Rage expenses: ${totalExpenses.toFixed(2)} lv.`);
}


calcExpenses(7, 2, 3, 4, 5);
calcExpenses(23, 12.50, 21.50, 40, 200);