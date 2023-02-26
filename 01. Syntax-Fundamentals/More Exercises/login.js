function login(arrayOfStrings) {
    let tries = 4;
    let username = arrayOfStrings.shift()

    for (let str of arrayOfStrings) {
        if (str === reverseStr(username)) {
            tries -= 1;
            console.log(`User ${username} logged in.`);
            break;
        } else {
            tries -= 1;
            if (tries === 0) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);
        }
    }

    function reverseStr(word) {
        return word.split('').reverse().join('');
    }
}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);