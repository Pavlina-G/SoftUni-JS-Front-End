function* genCharCodes(data) {
    let end = data.length

    for (let i = 0; i < end; i++) {
        yield data.charCodeAt(i);
    }
}
let letters = 'abcdef';
// let letters = 'ab';
// let letters = 'cd';
// let letters = 'ef';
for (let code of genCharCodes(letters)) {
    console.log(code);
}