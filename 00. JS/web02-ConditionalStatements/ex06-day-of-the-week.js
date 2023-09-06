function printDayName(num){
    let days = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday',

    }
    if (!(num in days)){
        console.log('Error');
    } else {
        console.log(days[num]);
    }
}

printDayName(1);
printDayName(2);
printDayName(3);
printDayName(4);
printDayName(5);
printDayName(6);
printDayName(7);
printDayName(8);