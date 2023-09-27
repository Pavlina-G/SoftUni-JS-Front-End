function* firstGen(a, b, c, d) {
    yield a;
    yield b;
    yield* secondGen(c, d)
}

function* secondGen(a, b) {
    yield a;
    yield b;
}

// let gen = firstGen(1, 2, 3, 4);
let gen = firstGen('a','b','c','d',);
// let gen = firstGen(5, 6, 7, 8);

for (let n of gen) {
    console.log(n);
}