function* patternGen(n, m) {
    let pattern = []
    for (let i = 0; i < m; i++) {
        pattern.push(...n)
    }
    yield pattern.join(', ');
}

let gen1 = patternGen([1, 2, 3], 2);
let gen2 = patternGen(['a','b'], 3);
let gen3 = patternGen([5, 6], 2);

for (let n of gen2) {
    console.log(n);
}