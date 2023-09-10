function f(n) {
    let collatzSeq = [];

    while (n >= 1) {
        collatzSeq.push(n);
        if (n === 1) {
            break;
        }
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = (n * 3) + 1
        }
    }
    console.log(collatzSeq.join(' '));
}

f(6);
f(12);
f(9);
f(200);
f(15);