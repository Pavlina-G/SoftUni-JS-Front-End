function veggieMarket(product, day, quantity) {
    let vegetables = {
        'tomato': 2.50,
        'onion': 1.20,
        'lettuce': 0.85,
        'cucumber': 1.45,
        'pepper': 5.50,
    }
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday ', 'Friday', 'Saturday', 'Sunday']

    if (!(days.includes(day))) {
        console.log('error')
    } else if (day === 'Saturday' || day === 'Sunday') {
        vegetables.tomato = 2.80;
        vegetables.onion = 1.30;
        vegetables.lettuce = 0.85;
        vegetables.cucumber = 1.75;
        vegetables.pepper = 3.50;
    }

    if (product in vegetables) {
        let price = vegetables[product] * quantity
        console.log(price.toFixed(2));
    } else {
        console.log('error');
    }

}

veggieMarket('tomato', 'Tuesday', 2);
veggieMarket('onion', 'Sunday', 3);
veggieMarket('onion', 'Monday', 3);
veggieMarket('pepper', 'Monday', 10);
veggieMarket('banana', 'Friday', 5);
veggieMarket('onion', 'Fridayy', 5);