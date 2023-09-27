class SequenceGenerator {
    constructor() {
        this.start = 1;
        // this.end = Infinity;
        this.step = 1;
    }

    *genGetValue() {
        while (true) {
            yield this.start += this.step;
        }
    }
    // *[Symbol.iterator]() {
    //     for (let index = this.start; index <= this.end; index += this.step) {
    //         yield index;
    //     }

}


// let seqGen = new SequenceGenerator();
// for (num of seqGen) {
//     console.log(num);
// }
let seqGen = new SequenceGenerator().genGetValue();
console.log(seqGen.next());
console.log(seqGen.next());
console.log(seqGen.next());
console.log(seqGen.next());

function* numberGenerator() {
    for (let index = 1; index <= Infinity; index++) {
        yield index;
    }
}
const generator = numberGenerator();
console.log(generator.next()); 