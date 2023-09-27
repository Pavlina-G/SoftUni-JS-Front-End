class QueueArr {
    constructor(elements = []) {
        this.elements = elements;

    }

    [Symbol.iterator]() {
        let start = -1;
        let end = this.elements.length - 1;
        let data = this.elements
        return {
            next() {
                if (end > 0 && start < end) {
                    start += 1;
                    return { value: data.shift(), done: false }
                } else {
                    return { done: true }
                }

            }
        }
    }
}

// let queueEl = new QueueArr([1,2,3]);
let queueEl = new QueueArr(['a', 'b', 'c']);
// let queueEl = new QueueArr([5,6,7]);
for (let el of queueEl) {
    console.log(el);
}