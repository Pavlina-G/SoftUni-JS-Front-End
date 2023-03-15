function storeProvision(currentStock, orderedProducts) {
    let stocks = {};
    let combinedProducts = [...currentStock, ...orderedProducts]

    // for (let i = 0; i < currentStock.length; i += 2) {
    //     stocks[currentStock[i]] = Number(currentStock[i + 1]);
    // }
    // for (let i = 0; i < orderedProducts.length; i += 2) {
    //     let product = orderedProducts[i]
    //     let quantity = Number(orderedProducts[i+1])
    //
    //     if (product in stocks) {
    //         stocks[product] += quantity;
    //     } else {
    //         stocks[product] = quantity;
    //     }
    // }

    for (let i = 0; i < combinedProducts.length; i += 2) {
        let product = combinedProducts[i]
        let quantity = Number(combinedProducts[i+1])

        if (product in stocks) {
            stocks[product] += quantity;
        } else {
            stocks[product] = quantity;
        }
    }

    for (const product in stocks) {
        console.log(`${product} -> ${stocks[product]}`);
    }

}

storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);
storeProvision([
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);