function drawSquareFrame(n){
    let top = '+';
    for(let i=0; i<n-2;i++){
        top += ' -';
    }
    top += ' +';
    console.log(top);

    for (m=0; m < n-2; m++){
        let middle = '|';
        for (let j=0; j<n-2; j++) {
            middle += ' -';
        }
        middle += ' |';
        console.log(middle);
    }

    let bottom = '+';
    for(let i=0; i<n-2;i++){
        bottom += ' -';
    }
    bottom += ' +';
    console.log(bottom);

}

drawSquareFrame(3);
drawSquareFrame(4);
drawSquareFrame(5);
drawSquareFrame(6);