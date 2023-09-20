class StringContainer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        if (this.innerLength < length) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }

    }

    toString() {
        let diff = this.innerString.length - this.innerLength
        if (this.innerLength === 0) {
            return '...';
        }
        else if (this.innerString.length > this.innerLength) {
            return this.innerString.slice(0, diff) + '...';
        } else {
            return this.innerString;
        }
    }


}


let test = new StringContainer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
