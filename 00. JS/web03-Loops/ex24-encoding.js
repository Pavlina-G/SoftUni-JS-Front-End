function encoding(n) {
    let reversedNums = n.toString().split('').reverse()

    for (let num of reversedNums) {
        let number = Number(num);
        if (Number(num) === 0) {
            console.log('Zero');
        } else {
            let char = String.fromCharCode(number + 33)
            console.log(char.repeat(number))
        }

    }
}

encoding(2049);
encoding(9347439);