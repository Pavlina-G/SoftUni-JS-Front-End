function equalArr(arr1 = [], arr2 = []) {
    let idx;
    let notEqual = false;
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            notEqual = true;
            idx = i;
            break
        }
    }
    if (!notEqual) {
        arr1.map(n => sum += Number(n))
        console.log(sum);
    } else {
        console.log(`Arrays are not identical. Found difference at ${idx} index`);
    }
}

equalArr(['10', '20', '30'], ['10', '20', '30']);
equalArr(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArr(['1'], ['10']);