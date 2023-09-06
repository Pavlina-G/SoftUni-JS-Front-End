function calcTotalPrice(product, city, quantity) {
    let products = {
        'Sofia': {
            'coffee': 0.50,
            'water': 0.80,
            'juice': 1.20,
            'sweets': 1.45,
            'chips': 1.65,
        },
        'Plovdiv': {
            'coffee': 0.40,
            'water': 0.70,
            'juice': 1.15,
            'sweets': 1.30,
            'chips': 1.50,
        },
        'Varna': {
            'coffee': 0.45,
            'water': 0.70,
            'juice': 1.10,
            'sweets': 1.35,
            'chips': 1.55,
        }
    }
    let price;
    if (city === 'Sofia') {
        price = products['Sofia'][product]
    } else if (city === 'Plovdiv') {
        price = products['Plovdiv'][product]
    } else if (city === 'Varna') {
        price = products['Varna'][product]
    } else {
        price = 0;
    }
    let totalPrice = quantity * price

    console.log(totalPrice.toFixed(2))

    // if (city in products) {
    //     let totalPrice = products[city][product] * quantity
    //     console.log(totalPrice.toFixed(2))
    // } else {
    //     console.log('Error');
    // }

}

calcTotalPrice('coffee', 'Varna', 2);
calcTotalPrice('chips', 'Plovdiv', 1);
calcTotalPrice('juice', 'Sofia', 6);
calcTotalPrice('juice', 'Burgas', 6);