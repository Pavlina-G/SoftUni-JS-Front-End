function printDay(n) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    if (n - 1 in days) {
        console.log(days[n - 1]);
    } else {
        console.log('Invalid');
    }

}

printDay(3);
printDay(6);
printDay(11);
printDay(0);