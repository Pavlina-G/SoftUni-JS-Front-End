function checkNum(n) {
    let num = n.toString();
    
    let sum = 0;
    for (let i=0; i<num.length; i++) {
        sum += Number(num[i]) ** num.length;
    }

    if (sum===n) {
        console.log('true');
    } else {
        console.log('false');
    }
}

checkNum(153);
checkNum(370);
checkNum(123);
checkNum(407);
checkNum(1634);