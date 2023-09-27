const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class OddIterator {
    constructor(data) {
        this.data = data;
    }

    [Symbol.iterator]() {
        let idx = -1
        const data = this.data.filter(n => n % 2 !== 0)

        return {
            next() {
                idx++;
                if (idx < data.length) {
                    return { value: data[idx], done: false }
                } else {
                    return { done: true }
                }
            }
        }
    }
}
const oddValues = new OddIterator(arr);

for (const value of oddValues) {
    console.log(value);
}
