function validityChecker(x1, y1, x2, y2) {
    let distance = 0;
    let distance1 = 0;
    let distance2 = 0;
    let result = [];

    distance = Math.sqrt(((0 - x1) ** 2) + ((0 - y1) ** 2))
    distance1 = Math.sqrt(((0 - x2) ** 2) + ((0 - y2) ** 2))
    distance2 = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))

    if (Number.isInteger(distance)) {
        result.push(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        result.push(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(distance1)) {
        result.push(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        result.push(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(distance2)) {
        result.push(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        result.push(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
    return result.join('\n')
}

console.log(validityChecker(3, 0, 0, 4));
console.log(validityChecker(2, 1, 1, 1));