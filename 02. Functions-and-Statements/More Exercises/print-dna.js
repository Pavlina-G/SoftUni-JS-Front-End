function printDna(num) {

    let dna = String;
    let sequence = 'ATCGTTAGGG'.split('');
    let result = [];
    let count = 1;

    // console.log(sequence)
    while (num > 0) {
        first = sequence.shift();
        second = sequence.shift();

        sequence.push(first, second)
        if (count > 4) {
            count = 1;
        }

        if (count === 1) {
            dna = '**'.concat(first, second) + '**'
        } else if (count === 2) {
            dna = '*'.concat(first) + '--'.concat(second) + '*';
        } else if (count === 3) {
            dna = first + '----' + second;
        } else if (count === 4) {
            dna = '*'.concat(first) + '--'.concat(second) + '*';
        }
        result.push(dna);
        num -= 1;
        count += 1;
    }
    console.log(result.join('\n'));
}

// printDna(4);
printDna(10);