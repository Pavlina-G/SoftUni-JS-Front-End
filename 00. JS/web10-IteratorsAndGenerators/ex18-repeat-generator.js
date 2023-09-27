function* patternGen(n, m) {
    for (let i = 0; i < m; i++) {
        yield n;
    }
}

let gen1 = patternGen(2,3);
let gen2 = patternGen('a',4);
let gen3 = patternGen(7,7);

for (let n of gen2){
    console.log(n);
}

