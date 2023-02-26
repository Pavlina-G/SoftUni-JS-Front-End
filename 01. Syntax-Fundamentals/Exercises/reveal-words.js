function revealWords(words, text) {
    words = words.split(', ')

    for (let word of words) {
        for (el of text.split(' ')) {
            if (el.includes('*') && el.length === word.length) {
                text = text.replace(el, word);
            }
        }
    }
    // console.log(text);
    return text;
}

revealWords('great',
    'softuni is ***** place for learning new programming languages'
);
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);