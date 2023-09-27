function* arrayFlattenGen(arr = []) {
    
    let result = arr.flat();
    
    for (let el of result){
        yield el;
    }
}

flat1 = arrayFlattenGen([[1, 2], [3, 4]]);
for (let el of flat1){
    console.log(el);
}
flat2 = (arrayFlattenGen(['a', ['b', 'c'], ['d', 'e']]));
flat3 = (arrayFlattenGen([[5, 6], 7, [8, 9]]));

console.log(flat2.next().value);
console.log(flat2.next().value);
console.log(flat2.next().value);
console.log(flat2.next().value);
console.log(flat2.next().value);