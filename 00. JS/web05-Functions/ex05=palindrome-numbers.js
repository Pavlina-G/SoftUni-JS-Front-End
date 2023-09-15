function checkPalindrome(numbers = []) {
    for (num of numbers) {
        let reversedNum = num.toString().split('').reverse().join('');
        if (num != reversedNum) {
            console.log('false');
        } else {
            console.log('true');
        }
    }
}

checkPalindrome([123, 323, 421, 121]);
checkPalindrome([32, 2, 232, 1010]);