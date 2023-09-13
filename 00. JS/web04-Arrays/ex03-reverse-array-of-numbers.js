function reversePrint(n, arr = []) {
    let valid = false;
    if (n > 0 && arr.length > 0) {
        valid = true;
        console.log(arr
            .filter((_, idx) => idx < n)
            .reverse().join(' '));
    }
    if (!valid) {
        console.log('Empty array or invalid number');
    }


}

reversePrint(3, [10, 20, 30, 40, 50]);
reversePrint(4, [-1, 20, 99, 5]);
reversePrint(2, [66, 43, 75, 89, 47]);
reversePrint(1, [66, 43, 75, 89, 47]);
reversePrint(0, [66, 43, 75, 89, 47]);