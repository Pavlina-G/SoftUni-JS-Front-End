class SliceIterator {
    constructor(data, start, end) {
        this.data = data;
        this.start = start;
        this.end = end;
    }

    [Symbol.iterator]() {
        let data = this.data;
        let startIdx = this.start;
        let index = -1;
        let end = this.end + 1;
        return {
            next() {
                if (startIdx >= 0 && startIdx < data.length) {
                    let sliced = data.slice(startIdx, end);
                    if (index < sliced.length - 1) {
                        index += 1;
                        return { value: sliced[index], done: false }
                    } else {
                        return { done: true }
                    }
                }

            }
        }
    }
}

// let iter = new SliceIterator([1, 2, 3, 4, 5], 1, 3)
let iter = new SliceIterator(['apple', 'banana', 'cherry', 'date'], 0, 2)

// let iter = new SliceIterator([5,6,7,8,9,10], 4, 5)
for (let n of iter) {
    console.log(n);
}