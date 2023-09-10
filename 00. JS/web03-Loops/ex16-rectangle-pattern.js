function f(n,m){
    for(let i=0; i < n; i++){
        if (i==0 || i === n-1) {
            console.log('*'.repeat(m));
        } else {
            console.log('*' + ' '.repeat(m-2) + '*');
        }
        
    }
}

f(4,6);
f(2,2);
f(3,4);
// f(2,1);