function stringSubstring(word, text) {
    text = text.toLowerCase().split(' ')

    if (text.includes(word.toLowerCase())) {
        return word;
    } else {
        return `${word} not found!`
    }
}

console.log(stringSubstring('javascript',
    'JavaScript is the best programming language'
));
console.log(stringSubstring('Javascript',
    'JavaScript is the best programming language'
));
console.log(stringSubstring('javascrip',
    'JavaScript is the best programming language'
));
console.log(stringSubstring('python', 'JavaScript is the best programming language'));