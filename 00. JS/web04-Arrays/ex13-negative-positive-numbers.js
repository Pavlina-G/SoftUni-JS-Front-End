function arrangeNums(arr = []) {
    let newArr = [];
    while (arr.length > 0) {
        let el = arr.shift();
        if (el < 0) {
            newArr.unshift(el);
        } else {
            newArr.push(el);
        }
    }

    newArr.forEach((el) => console.log(el))
}

arrangeNums([7, -2, 8, 9]);
arrangeNums([3, -2, 0, -1]);