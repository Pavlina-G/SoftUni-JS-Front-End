function printSubstr(text = String, start, end) {
    let result = '';
    for (let i = start; i <= end; i++) {
        result += text[i]
    }
    console.log(result);
}

printSubstr('ESentence', 1, 8);
printSubstr('DropWord', 4, 7);