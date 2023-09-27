function* genNumsPowerOfTwo() {
    let num = 2;
    let pow = 0;
    // let end = Infinity
    let end = 10

    for (let i = pow; i<end; i++) {
        yield num ** i;
    }

}
let gen = genNumsPowerOfTwo();
for (let n of gen){
    console.log(n);
}
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
