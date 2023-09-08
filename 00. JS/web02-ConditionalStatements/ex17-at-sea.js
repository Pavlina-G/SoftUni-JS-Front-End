function calcCost(days, room, assessment) {
    let totalCost = 0;
    let prices = {
        'single room': 25.00,
        'apartment': 50.00,
        'president apartment': 100.00,
    }
    totalCost = (days - 1) * prices[room]
    if (room === 'apartment') {
        if (days < 10) {
            totalCost *= 0.70;
        } else if (days < 16) {
            totalCost *= 0.65;
        } else {
            totalCost *= 0.50;
        }
    } else if (room === 'president apartment') {
        if (days < 10) {
            totalCost *= 0.90;
        } else if (days < 16) {
            totalCost *= 0.85;
        } else {
            totalCost *= 0.80;
        }
    }
    switch (assessment) {
        case 'positive':
            totalCost *= 1.25;
            break;
        case 'negative':
            totalCost *= 0.90;
            break;

        default:
            break;
    }
    console.log(totalCost.toFixed(2));
}

calcCost(11, "apartment", "positive");
calcCost(30, "president apartment", "negative");
calcCost(12, "single room", "positive");
calcCost(2, "apartment", "positive");