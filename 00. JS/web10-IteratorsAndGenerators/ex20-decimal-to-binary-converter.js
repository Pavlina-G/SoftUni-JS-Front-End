function* decimalToBinary(n) {
    let bin = n.toString(2);
    yield bin;
}

let gen = decimalToBinary(5);
let gen1 = decimalToBinary(8);
let gen2 = decimalToBinary(15);
let gen3 = decimalToBinary(-7);

console.log(gen.next().value);
console.log(gen1.next().value);
console.log(gen2.next().value);
console.log(gen3.next().value);