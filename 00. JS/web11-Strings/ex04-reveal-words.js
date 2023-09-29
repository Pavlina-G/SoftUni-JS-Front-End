function revealWords(info, text) {
    let words = info.split(', ')
        .sort((a, b) => a.length - b.length);
    let startIdx = text.indexOf('*');
    let endIdx = 0;

    for (let ch of text.slice(startIdx)) {
        if (ch === '*') {
            endIdx = startIdx ++;
        } else {
            for (let w of words) {
                if (w.length = text.slice(startIdx, endIdx).length) {
                    console.log(text.slice(startIdx, endIdx));
                    text.slice(startIdx, endIdx) = w;
                }
                startIdx = text.indexOf('*', endIdx);
                endIdx = 0;
            }
        }

    }
    console.log(text);

}

revealWords("great", "JavaScript* is ***** programming language");
revealWords("the, best, learn", "JavaScript is *** **** language to *****");
revealWords("best, the, learn", "JavaScript is *** **** language to *****");
