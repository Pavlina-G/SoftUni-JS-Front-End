function printEl(numbers = []) {
    let count = 1;
    let elements = []
    let seq = []
    let currentNum;

    for (let i = 0; i < numbers.length - 1; i++) {
        let nextNum = numbers[i + 1];
        currentNum = numbers[i];
        if (currentNum === nextNum) {
            count += 1;

        } else {
            for (let i = 0; i < count; i++) {
                seq.push(currentNum)
            }
            elements.push(seq)
            seq = [];
            count = 1
        }
    }
    if (count != 1) {
        for (let i = 0; i < count; i++) {
            seq.push(currentNum);
        }
        elements.push(seq)
        seq = [];
        count = 1;
    }
    if (elements.length > 1) {
        elements.sort((a, b) => b.length - a.length);
        console.log(elements[elements.length - 1].join(' ')); // right
        // console.log(elements[0].join(' ')); //left
    } else if (elements.length === 1) {
        console.log(elements.join(' '));
    }



}

printEl([2, 2, 2, 3, 4, 4, 2, 2, 2, 1]);
printEl([2, 2, 2, 3, 4, 4, 5, 5, 5, 1]);
printEl([1, 1, 1, 2, 3, 1, 3, 3, 1, 1]);
printEl([1, 1, 2, 3, 4, 5, 6, 2, 2]);
printEl([4, 4, 4, 4]);
printEl([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);