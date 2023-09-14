function nonDecrSubsequence(arr = []) {
    let maxEl = arr[0];
    let newArr = [];
    arr.forEach((el) => {
        if (el >= maxEl) {
            maxEl = el;
            newArr.push(maxEl)
        }
    })
    console.log(newArr.join(' '));

}

nonDecrSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecrSubsequence([1, 2, 3, 4]);
nonDecrSubsequence([20, 3, 2, 15, 6, 1]);