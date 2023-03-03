function printOrderPrice(product, quantity) {
    let coffeePrice = 1.50;
    let waterPrice = 1.00;
    let cokePrice = 1.40;
    let snacksPrice = 2.00;
    let totalPrice = 0;

    switch (product) {
        case 'coffee' :
            totalPrice = coffeePrice * quantity;
            console.log(totalPrice.toFixed(2));
            break;
        case 'water' :
            totalPrice = waterPrice * quantity;
            console.log(totalPrice.toFixed(2));
            break;
        case 'coke' :
            totalPrice = cokePrice * quantity;
            console.log(totalPrice.toFixed(2));
            break;
        case 'snacks' :
            totalPrice = snacksPrice * quantity;
            console.log(totalPrice.toFixed(2));
            break;
    }
}

printOrderPrice("water", 5);
printOrderPrice("coffee", 2);