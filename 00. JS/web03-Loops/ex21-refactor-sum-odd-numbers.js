function summOddNumbers(n) {
    let sum = 0;
    let count = 0;

    // for (let i = 1; i < n*2 + 1; i+=2) {
    //     console.log(i);
    //     sum += i;
    // }
    // console.log(`Sum: ${sum}`);
    let i = 1;

    while (count != n) {
        if (i % 2 != 0) {
            console.log(i);
            sum += i;
            
            count += 1;
        }
        i += 1;
    }
    console.log(`Sum: ${sum}`);
    
}

summOddNumbers(5);
summOddNumbers(3);