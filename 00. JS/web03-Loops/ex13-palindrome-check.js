function palindromeCheck(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i > -1; i--) {
        reversedWord += word[i]
    }
    reversedWord === word ? console.log('true') : console.log('false');

}

palindromeCheck('radar');
palindromeCheck('hello');
palindromeCheck('racecar');
palindromeCheck('java');
palindromeCheck('madam');