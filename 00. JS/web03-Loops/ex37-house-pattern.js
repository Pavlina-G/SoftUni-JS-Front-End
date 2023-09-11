function drawHouse(n) {

    let stars = 1;
    if (n % 2 === 0) {
        stars += 1;
    }
    let end = 0;
    if (n % 2 === 0) {
        end = n / 2;
    } else {
        end = Math.ceil((n + 1) / 2)
    }

    for (let row = 0; row < end; row++) {
        let spaceCount = (n - stars) / 2;
        console.log(' '.repeat(spaceCount) + '*'.repeat(stars) + ' '.repeat(spaceCount));
        stars += 2;
    }

    for (let i = 0; i < 2; i++) {
        let line = '*' + ' '.repeat(n - 2) + '*';
        console.log(line);
    }

}

drawHouse(7);
drawHouse(4);
drawHouse(3);