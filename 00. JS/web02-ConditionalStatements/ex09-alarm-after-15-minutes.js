function f(hour, min){
    let hours = hour;
    let minutes = min + 15

    if (minutes > 59) {
        hours += 1
        if (hours === 24) {
            hours = 0
        }
        minutes = Math.abs(minutes-60)
    }

    function addZero(num){
        numStr = num.toString();
        
        if (numStr.length === 1) {
            num = 0+numStr
        }
        return num;
    }
    
    console.log(`${hours}:${addZero(minutes)}`)
}



f(1, 47);
f(23, 50);
f(0, 2);
f(23, 59);
f(11, 7);
f(12, 48);