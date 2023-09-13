function printSumArr(arr = []) {
    let mergedArr = [];
    while (arr.length > 1) {
        mergedArr = []
        for (let i = 0; i < arr.length - 1; i++) {
            let sum = arr[i] + arr[i + 1]
            mergedArr.push(sum)
        }
        arr = mergedArr

    }
    console.log(arr[0]);
}

printSumArr([2, 10, 3]);
printSumArr([5,0,4,1,2]);
printSumArr([1]);