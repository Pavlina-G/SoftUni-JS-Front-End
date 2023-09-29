function findWord(word, text) {

    const regex = new RegExp(`${word}+`, 'igm')
    let found = regex.test(text);

    if (found) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

findWord('javascript',
    'JavaScript is the best programming language'
);
findWord('python',
    'JavaScript is the best programming language'
);