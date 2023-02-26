function arrayRotation(list, num) {
    for (let i = 0; i < num; i++) {
        moveNum = list.shift();
        list.push(moveNum)
    }
    console.log(list.join(' '))
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5)