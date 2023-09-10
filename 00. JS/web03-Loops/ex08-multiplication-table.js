function printMultiplicationTable() {
    for (i = 1; i < 11; i++) {
        for (j = 1; j < 11; j++) {
            let result = i * j;
            console.log(`${i} * ${j} = ${result}`);
        }
    }
}

printMultiplicationTable();