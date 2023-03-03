function charactersInRange(...chars) {
    newChars = chars.map(ch => ch.charCodeAt())
        .sort((a, b) => a - b);
    let start = newChars[0];
    let last = newChars[newChars.length - 1];
    let result = [];

    for (let i = start; i < last - 1; i++) {
        start += 1;
        result.push(String.fromCharCode(start));
    }
    console.log(result.join(' '));
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');