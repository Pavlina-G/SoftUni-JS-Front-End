function printNum(col) {
    let start = 65;
    const alphabetObj = {};

    for (var i = 0; i < 26; i++) {
        alphabetObj[String.fromCharCode(start + i)] = i + 1;
    }

    const column = col.split('');
    let sum = 0;

    if (column.length === 1) {
        sum = alphabetObj[col];
    } else {
        for (let i = 0; i < column.length-1; i++) {
            sum += (26 * alphabetObj[column[i]]) ;
        }
        sum += alphabetObj[column[column.length-1]];
    }

    console.log(sum);
}

printNum('AB');
printNum('A');
printNum('C');
printNum('CZ');
printNum('MM');
