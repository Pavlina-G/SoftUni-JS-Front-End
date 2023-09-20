class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(el) {
        this.list.push(el);
        this.size += 1;
        this.list.sort((a, b) => a - b);
    }

    remove(index) {
        if (index in this.list) {
            this.list.splice(index, 1);
            this.size -= 1;
        } else {
            return 'Index is not valid';
        }
    }

    get(index) {
        if (index in this.list) {
            console.log(`Lenght` + this.list.length);
            return this.list[index];
        } else {
            return 'Idx not valid';
        }
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.get(2));
