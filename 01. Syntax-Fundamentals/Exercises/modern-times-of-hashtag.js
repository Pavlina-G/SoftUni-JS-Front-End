function specialWords(text) {
    text = text.split(' ');
    for (word of text) {
        if ((word.startsWith('#') && word.length > 1) && containsOnlyLetters(word.slice(1))) {
            console.log(word.slice(1));
        }
    }

    function containsOnlyLetters(str) {
        for (const strKey of str) {
            if (strKey === '#' || /\d/.test(strKey)) {
                return false;
            } else {
                return true;
            }

        }
    }
}

specialWords('Nowadays everyone uses # to tag a #special word in #socialMedia')
specialWords('The symbol # is known #variously in English-speaking #regions as the #number sign')