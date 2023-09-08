function getDiscount(age, card){
    let discount;
    
    if (age < 18){
        discount = 10
    } else if (age < 65) {
        card ? discount = 20 : discount = 10
    } else {
        discount = 30
    }
    console.log(`${discount}% discount`);
}

getDiscount(20, 'Yes');
getDiscount(15, 'No');
getDiscount(70, 'No');