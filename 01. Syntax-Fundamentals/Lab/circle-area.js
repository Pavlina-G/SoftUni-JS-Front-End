function circleArea(arg) {
    let result;
    if (typeof(arg) === 'number') {
        result = Math.pow(arg, 2) * Math.PI;
        console.log(result.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(arg)}.`)
    }
}

circleArea(5);
circleArea('name');