function solve(score, extra){
    let result;

    if (score >= 90) {
        result = 'Admitted';
    } else if (score >= 80 && extra >= 2) {
        result = 'Admitted';
    } else {
        result = 'Not admitted';
    }
    console.log(result);
}

solve(85,3);
solve(88,1);
solve(91,0);