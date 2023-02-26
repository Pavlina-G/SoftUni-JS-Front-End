function cookingByNumbers(number, ...operations) {
    num = Number(number)

    operations.forEach(
        (todo) => {
            if (todo === 'chop') {
                num /= 2;
                console.log(num);
            } else if (todo === 'dice') {
                num = Math.sqrt(num);
                console.log(num);
            } else if (todo === 'spice') {
                num += 1;
                console.log(num);
            } else if (todo === 'bake') {
                num *= 3;
                console.log(num);
            } else {
                num -= num * 0.20;
                console.log(num);
            }
        }
    )
    // for (let todo of operations) {
    //     if (todo === 'chop') {
    //         num /= 2;
    //         console.log(num);
    //     } else if (todo === 'dice') {
    //         num = Math.sqrt(num);
    //         console.log(num);
    //     } else if (todo === 'spice') {
    //         num += 1;
    //         console.log(num);
    //     } else if (todo === 'bake') {
    //         num *= 3;
    //         console.log(num);
    //     } else {
    //         num -= num * 0.20;
    //         console.log(num);
    //     }
    // }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')