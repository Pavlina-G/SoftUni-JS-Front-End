function bitcoinMining(shiftNum) {
    let bitcoinCount = 0;
    let dayPurchase = [];
    let days = 0
    let money = 0;
    let bitcoinPrice = 11949.16;

    for (let shift of shiftNum) {
        days += 1;
        if (days % 3 === 0) {
            shift *= 0.70;
        }
        money += convertGoldToLv(shift);

        if (money >= bitcoinPrice) {
            currentBitcoin = Math.floor(money / bitcoinPrice);
            bitcoinCount += currentBitcoin;
            money -= currentBitcoin * bitcoinPrice;
            dayPurchase.push(days)
        }
    }
    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (dayPurchase.length > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayPurchase.shift()}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);

    function convertGoldToLv(gold) {
        return gold * 67.51;
    }
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);