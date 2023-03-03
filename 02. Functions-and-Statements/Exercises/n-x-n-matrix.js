function printMatrix(number){
    for (let i = 0; i < number; i++) {
        console.log(`${String(number)} `.repeat(number))
    }
}

printMatrix(3);
printMatrix(7);
printMatrix(2);