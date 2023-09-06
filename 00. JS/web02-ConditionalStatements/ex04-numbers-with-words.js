function showNumAsText(num) {
    const single_digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    if (num <= 9 && num >= 0) {
        console.log(single_digit[num]);
    } else if (num > 9) {
        console.log('too big');
    } else {
        console.log('too small');
    }

}


showNumAsText(3);
showNumAsText(7);
showNumAsText(5);
showNumAsText(10);
showNumAsText(9);
showNumAsText(-1);