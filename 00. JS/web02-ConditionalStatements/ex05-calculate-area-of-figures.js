function calcArea(shape, a, b) {
    let area;
    
    switch (shape) {
        case 'square':
            area = a * a;
            break;
        case 'rectangle':
            area = a * b;
            break;
        case 'triangle':
            area = (a * b) / 2;
            break;
        case 'circle':
            area = Math.PI * (a**2);
            break;
        default:
            break;
    }

    // if (shape ==='square') {
    //     area = a * a;
    // } else if (shape === 'rectangle') {
    //     area = a * b;
    // } else if (shape === 'triangle') {
    //     area = (a * b) / 2;
    // } else if (shape === 'circle') {
    //     area = Math.PI * (a**2);
    // } else {
    //     area = 'This unknown shape';
    // }
    console.log(area.toFixed(2));
}

calcArea('square', 5);
calcArea('rectangle', 10, 3.5);
calcArea('triangle', 4.5, 20);
calcArea('circle', 10);