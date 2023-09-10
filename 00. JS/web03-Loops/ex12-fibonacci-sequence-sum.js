function fibonacciSeqSum(n){
    let n1=0, n2 =1, nextNum;
    let fibNums = [n1,n2];
    let sum = 0;

    while (fibNums.length <= n) {
        nextNum = n1 + n2;
        fibNums.push(nextNum);
        n1 = n2;
        n2 = nextNum;
    }
    
    for (let i = 0; i < n + 1; i++) {
        sum += fibNums[i];
        
    }
    console.log(sum);
}

fibonacciSeqSum(3);
fibonacciSeqSum(5);
fibonacciSeqSum(1);
fibonacciSeqSum(0);
fibonacciSeqSum(10);