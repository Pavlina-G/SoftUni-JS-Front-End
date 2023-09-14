function printNums(k,arr=[]){
    let first = arr.slice(0,k);
    let last = arr.slice(arr.length-k,arr.length);
    
    console.log(first.join(' '));
    console.log(last.join(' '));
}

printNums(2, [7, 8, 9]);
printNums(3, [6, 7, 8, 9]);