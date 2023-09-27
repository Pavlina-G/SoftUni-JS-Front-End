class IterateArr {
    constructor(arr) {
        this.arr = arr;
        this.startIdx = -1;
    }

    [Symbol.iterator]() {
        // let data = this.arr.filter(el => el % 2 === 0)
        let data = this.arr.filter(el => el.length > 5)
        // let data = this.arr.filter(el => el > 7)

        let endIdx = data.length
        let start = this.startIdx;
        return {
            next() {
                start++
                if (start < endIdx) {
                    return { value: data[start], done: false }
                } else {
                    return { done: true }
                }
            }

        }

    }

}

// let iterInput = new IterateArr([1, 2, 3, 4, 5]);
let iterInput = new IterateArr(['apple', 'banana', 'cherry']);
// let iterInput = new IterateArr([5,6,7,8,9,10]);


for (let n of iterInput) {
    console.log(n);
}