function drawSquare(n) {
    let pattern = ''
    for (let i = 0; i < n; i++) {
        pattern = '*' + ' '
        console.log(pattern.repeat(n));
    }
}

drawSquare(2);
drawSquare(3);
drawSquare(5);