function loading(n){
    let num = n.toString();

    if (num.length === 3) {
        console.log(`[%%%%%%%%%%]\nComplete!`);
        return;
    }
    for (let i=0;i<10;i++){
        if (i===Number(num[0])){
            let result = '%'.repeat(i) + '.'.repeat(10-i)
            console.log(`${i}0% [${result}]\nLoading...`);
        }
    }
}

loading(30);
loading(50);
loading(100);