function findWord(text) {

    for (let ch of text) {
        let regex = new RegExp(`${ch}{2,}`, 'gm');
        if (regex.test(text)) {
            let matches = text.match(regex);
            matches.forEach(m => {
                text = text.replace(m, m[0]);
            });
        }
    }
    console.log(text)
}

findWord('aaaaabbbbbcdddeeeedssaa');
findWord('qqqwerqwecccwd');