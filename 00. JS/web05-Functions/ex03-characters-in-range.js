function printChars(a, b) {
    let first = a.charCodeAt(0);
    let second = b.charCodeAt(0);
    let start;
    let end;

    if (first > second){
        start = second;
        end = first;
    } else {
        start = first;
        end = second;
    }

    const result = [];

    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i))
    }
    console.log(result.join(' '));

}

printChars("a", "d");
printChars("#", ":");
printChars("C", "#");
