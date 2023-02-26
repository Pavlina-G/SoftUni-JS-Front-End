function wordsUppercase(text) {
    let result = [];
    newText = text.replace(/[^a-zA-Z0-9]/g, " ");

    for (const word of newText.split(' ')) {
        if (/^[a-zA-Z]/.test(word)) {
            result.push(word.toUpperCase());
        }
    }
    return result.join(', ')
}

console.log(wordsUppercase('Hi, how are you?'));
console.log(wordsUppercase('hello'));
console.log(wordsUppercase('Functions in JS can be nested, i.e. hold other functions'));