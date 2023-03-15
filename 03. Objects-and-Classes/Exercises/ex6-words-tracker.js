function wordsTracker(list) {
    let searchedWords = list.shift().split(' ');
    let occurrences = {};

    for (const word of searchedWords) {
        occurrences[word] = 0;
    }

    for (const word of list) {
        if (word in occurrences) {
            occurrences[word] += 1;
        }
    }

    let sorted = Object.entries(occurrences).sort(
        (a,b) => {return b[1] - a[1]}
    )

    for (const [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }

}

wordsTracker([
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
);
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);
