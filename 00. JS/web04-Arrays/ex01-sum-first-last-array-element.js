function printSum(arr) {

    let lastIdx = arr.length - 1;
    let sum = 0;
    if (lastIdx > 0) {
        sum = Number(arr[0]) + Number(arr[lastIdx])
    } else if (lastIdx === 0) {
        sum = Number(arr[0]);
    } else {
        sum = 'Empty array'
    }


    console.log(sum);

}

printSum(['20', '30', '40']);
printSum(['10', '17', '22', '33']);
printSum(['11', '58', '69']);
printSum(['11']);
printSum([]);