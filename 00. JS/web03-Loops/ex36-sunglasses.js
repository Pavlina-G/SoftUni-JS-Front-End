function sunglasses(n){
    let top = '*'.repeat(2*n);
    top += ' '.repeat(n);
    top += '*'.repeat(2*n);
    console.log(top);

    for (let m=0; m<n-2;m++){
        let middle = '';
        middle += '*' + '/'.repeat(2*n-2) + '*'

        if (m === Math.floor((n-1)/ 2-1)) {
            middle += '|'.repeat(n);
        } else {
            middle += ' '.repeat(n);
        }
        middle += '*' + '/'.repeat(2*n-2) + '*'
        console.log(middle);
    }

    
    let bottom = '*'.repeat(2*n);
    bottom += ' '.repeat(n);
    bottom += '*'.repeat(2*n);
    console.log(bottom);
}

sunglasses(3);
sunglasses(4);
sunglasses(5);