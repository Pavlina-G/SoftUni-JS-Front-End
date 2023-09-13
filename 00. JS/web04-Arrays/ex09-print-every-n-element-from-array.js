function printArr(arr=[],step){
    let result = [];
    for (let i=0; i<arr.length; i+=step){
        result.push(arr[i]);
    }
    console.log(result.join(' '));
}

printArr(['5', '15', '31', '14', '20'], 2);
printArr(['dsa', 'asd', 'demo', 'test'], 2);
printArr(['1', '2', '3', '4', '5'], 6);