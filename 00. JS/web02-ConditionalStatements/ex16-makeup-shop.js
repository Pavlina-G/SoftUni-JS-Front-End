function calcProfit(renovationPrice, powder, lipstick, spiral, shadow, corrector) {
    prices = {
        'powder': 2.60,
        'lipstick': 3,
        'spiral': 4.10,
        'shadow': 8.20,
        'corrector': 2.00,
    }
    let discountRate = 0.25
    let rentRate = 0.10

    let profit = prices.powder * powder +
        prices.spiral * spiral +
        prices.lipstick * lipstick +
        prices.shadow * shadow +
        prices.corrector * corrector
    
    let orderedItems = powder + lipstick + spiral + shadow + corrector
    if (orderedItems >= 50) {
        profit *= 0.75
    }
    profit *= 0.90

    let difference = Math.abs(profit - renovationPrice)

    if (renovationPrice > profit) {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
    } else {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    }
}

calcProfit(40.8, 20, 25, 30, 50, 10);
calcProfit(320, 8, 2, 5, 5, 1);