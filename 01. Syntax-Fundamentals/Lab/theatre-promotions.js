function ticketPrice(day, age) {
    let price;
    if (day==='Weekday' && age<=18 && age>=0) {
        price = '12$';
    }
    else if (day==='Weekend' && age<=18 && age>=0) {
        price = '15$';
    }
    else if (day==='Holiday' && age<=18 && age>=0) {
        price = '5$';
    }
    else if (day==='Weekday' && age>18 && age<=64) {
        price = '18$';
    }
    else if (day==='Weekend' && age>18 && age<=64) {
        price = '20$';
    }
    else if (day==='Holiday' && age>18 && age<=64) {
        price = '12$';
    }
    else if (day==='Weekday' && age>64 && age<=122) {
        price = '12$';
    }
    else if (day==='Weekend' && age>64 && age<=122) {
        price = '15$';
    }
    else if (day==='Holiday' && age>64 && age<=122) {
        price = '10$';
    }
    else {
        price='Error!'
    }
    console.log(price);
}

ticketPrice('Weekday', 
42
);
ticketPrice('Holiday', -12);