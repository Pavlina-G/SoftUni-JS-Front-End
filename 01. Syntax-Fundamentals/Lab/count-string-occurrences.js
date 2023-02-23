function solve(text, searchedWord) {
    let counter = 0;
    words = text.split(' ');
    for (let word of words) {
        if (word === searchedWord) {
            counter += 1
        }
    }
    console.log(counter)
}

solve('This is a word and it also is a sentence',
    'is'
)