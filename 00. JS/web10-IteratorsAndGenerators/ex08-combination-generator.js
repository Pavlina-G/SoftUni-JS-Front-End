function* genCombinations(array = []) {

    if (array.length === 1) {
        yield array;
        return;
    }

    yield [array[0]];
    for (const c of genCombinations(array.slice(1))) {
        yield c;
        yield [array[0], ...c];
    }

}

genCombinations([1, 2])
let comb1 = genCombinations([1, 2]);
let comb2 = genCombinations(['a', 'b', 'c']);
let comb3 = genCombinations([5, 6]);


for (let c of comb1) {
    console.log(c);
}
for (let c of comb2) {
    console.log(c);
}
for (let c of comb2) {
    console.log(c);
}