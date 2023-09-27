class ArrayRevIterator {
    constructor(arr) {
        this.arr = arr;
    }

    [Symbol.iterator]() {
        let lastIdx = this.arr.length;
        const data = this.arr;
        return {
            next() {
                lastIdx--;
                if (lastIdx >= 0) {
                    return { value: data[lastIdx], done: false }
                } else {
                    return { done: true }
                }
            }
        }
    }
}


const arrRev = new ArrayRevIterator([1, 2, 3]);
for (let value of arrRev){
    console.log(value);
}

