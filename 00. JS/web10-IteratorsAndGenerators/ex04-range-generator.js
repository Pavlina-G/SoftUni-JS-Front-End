function* createRange(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const rangeGen = createRange(2, 6);
console.log(rangeGen.next().value);
console.log(rangeGen.next().value);
console.log(rangeGen.next().value);
console.log(rangeGen.next().value);
console.log(rangeGen.next().value);

