function* genTransform(data = [], func) {
    for (let d of data) {
        yield* func(d);
    }
}

function* transformTwo(x) {
    yield x * 2;
}

function* transformWord(w) {
    yield w.length;
}

function* transformMultiply(x) {
    yield x * x;
}

// let data = [1,2,3];
// let data = ['apple', 'banana'];
let data = [5, 6, 7];
// let gen = genTransform(data,transformTwo)
// let gen = genTransform(data,transformWord)
let gen = genTransform(data, transformMultiply)

for (let n of gen) {
    console.log(n);
}