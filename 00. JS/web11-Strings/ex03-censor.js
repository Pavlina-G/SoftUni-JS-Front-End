function censor(text, word) {
    const newWord = function (w) {
        return '*'.repeat(w.length);
    };
    let newText = '';
    let replacedWord = newWord(word)

    while (text.includes(word)) {
        newText = text.replace(word, replacedWord)
        text = newText
    }

    console.log(newText);

}

censor('A small sentence with some words', 'small');
censor('Find the hidden word', 'hidden');
censor('A small sentence with small words', 'small');
