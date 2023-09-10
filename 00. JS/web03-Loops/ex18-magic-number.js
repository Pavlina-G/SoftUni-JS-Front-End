function magicNumber(start, end, magicNum) {
    let count = 0;
    let isMagic = false;
    let result = '';

    for (let i = start; i < end + 1; i++) {
        for (let j = start; j < end + 1; j++) {
            count += 1;
            if (!isMagic && i + j === magicNum) {
                isMagic = true;
                result = `Combination ${count} - (${i} + ${j} = ${magicNum})`
            }
        }
    }

    if (isMagic) {
        console.log(result);
    } else {
        console.log(`${count} combinations - neither equals ${magicNum}`);
    }


}

magicNumber(1, 10, 5);
magicNumber(23, 24, 20);
magicNumber(1, 2, 3);