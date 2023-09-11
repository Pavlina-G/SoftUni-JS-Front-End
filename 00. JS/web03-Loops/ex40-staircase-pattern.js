function printStaircase(n) {
    let pattern = '';
    let count = 1;

    for (let i = 1; i < n + 1; i++) {

        let space = '';
        if (i > 2) {
            space += ' '.repeat(count)
            count += i - 1
        }
        pattern += space + '#'.repeat(i) + '\n';
    }
    console.log(pattern);

}

printStaircase(5);
printStaircase(4);
printStaircase(2);