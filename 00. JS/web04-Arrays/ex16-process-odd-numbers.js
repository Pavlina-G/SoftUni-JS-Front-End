function printOdd(arr = []) {
    let oddArr = arr
        .filter((el, idx) => idx % 2 != 0)
        .map((n) => n * 2).reverse()
    console.log(oddArr.join(' '));
}

printOdd([10, 15, 20, 25]);
printOdd([3, 0, 10, 4, 7, 3]);