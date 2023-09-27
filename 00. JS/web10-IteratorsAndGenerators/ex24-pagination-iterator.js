let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class PaginationIterator {
    constructor(data, size) {
        this.data = data;
        this.size = size;
    }

    [Symbol.iterator]() {
        let start = 0;
        let data = this.data;
        let size = this.size;
        return {
            next() {
                if (start < data.length) {
                    let page = data.slice(start, start + size)
                    let result = { value: page.join(','), done: false }
                    start += size;
                    return result;
                } else {
                    return { done: true }
                }
            }
        }
    }
}

// const pageIter = new PaginationIterator(data, 3);
const pageIter = new PaginationIterator(['a', 'b', 'c', 'd', 'e', 'f'], 2);

for (let p of pageIter) {
    console.log(p);
}