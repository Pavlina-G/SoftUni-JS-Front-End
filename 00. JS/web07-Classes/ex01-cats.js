class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says meow`);
    }
}

function catsMeow(arr = []) {
    const cats = []
    for (let cat of arr) {
        let [name, age] = cat.split(' ');
        const newCat = new Cat(name, age);
        cats.push(newCat)
        // newCat.meow();
    }
    cats.forEach(cat=>cat.meow())
}

catsMeow(['Mellon 2', 'Tom 3']);
catsMeow(['Branch 1', 'Poppy 3', 'Goldy 2']);
