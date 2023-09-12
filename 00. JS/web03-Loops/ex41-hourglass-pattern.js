function printHourglass(n) {
    let topBottom = "#".repeat(n + 2)
    let middle = '';
    let pattern = '';

    console.log(topBottom);
    let count = 1;

    for (let i = n; i > count; i--) {
        let space = ' '
        pattern = space.repeat(count) + '#' + ' '.repeat(n - 2 * count) + '#' + space.repeat(count);
        count += 1
        console.log(pattern);
    }
    if (n % 2 != 0) {
        middle = ' '.repeat((n + 1) / 2) + '#' + ' '.repeat((n + 1) / 2)
        console.log(middle);
    }
    let end = 0;
    if (n % 2 != 0) {
        count = n - 3;
        end = 1
    } else {
        count = n - 4;
        end = 2
    }


    for (let i = 0; i <= count + end; i++) {
        let space = ' '
        if (i === 0 && n % 2 === 0) {
            count -= 1;
            continue;

        } else {
            pattern = space.repeat(count) + '#' + ' '.repeat(n - 2 * count) + '#' + space.repeat(count);
        }

        count -= 1
        console.log(pattern);
    }

    console.log(topBottom);


}

printHourglass(5);
printHourglass(8);
printHourglass(2);