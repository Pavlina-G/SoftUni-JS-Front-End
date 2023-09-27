class StackArr {
    constructor(elements = []) {
        this.elements = elements;
    }

    *[Symbol.iterator]() {
        while (this.elements.length > 0){
            yield this.elements.pop();
        }
    }
}

// let stackEl = new StackArr([1,2,3]);
let stackEl = new StackArr(['a', 'b', 'c']);
// let stackEl = new StackArr([5,6,7]);
for (let el of stackEl) {
    console.log(el);
}