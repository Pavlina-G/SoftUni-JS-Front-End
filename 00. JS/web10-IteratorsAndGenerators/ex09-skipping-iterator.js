class SkipArrayElement {
    constructor(data) {
        this.data = data;
    }
    [Symbol.iterator]() {
        let data = this.data;
        let step = 2;
        let index = -2;
        return {
            next() {
                if (index < data.length - step) {
                    return { value: data[index += step], done: false }
                } else {
                    return { done: true }
                }
            }
        }
    }
}
// let arr = new SkipArrayElement([1,2,3,4]);
// let arr = new SkipArrayElement(['a','b','c','d']);
let arr = new SkipArrayElement([5, 6, 7, 8, 9]);

for (let el of arr) {
    console.log(el);
}

