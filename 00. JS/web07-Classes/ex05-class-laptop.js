class Laptop {
    constructor(info, quality) {
        this.info = {
            producer: info.producer,
            age: info.age,
            brand: info.brand,
        };
        this.quality = quality;
        this.isOn = false;
    }

    turnOn() {
        this.isOn = true;
        this.quality -= 1;
    }

    turnOff() {
        this.isOn = false;
        this.quality -= 1;
    }

    showInfo() {
        return JSON.stringify(this.info);
    }

    get price() {
        let result = 800;
        return result - (this.info.age * 2) + (this.quality * 0.5);
    }
}

// let info = {producer: "Asus",
// age: 2, brand: "Zenbook"}
// let laptop = new Laptop(info,
// 10)
// laptop.turnOn()
// console.log(laptop.showInfo())
// laptop.turnOff()
// console.log(laptop.quality)
// laptop.turnOn()
// console.log(laptop.isOn)
// console.log(laptop.price)

let info = {producer: "Lenovo",
age: 1, brand: "Legion"}
let laptop = new Laptop(info,
10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
laptop.turnOn()
laptop.turnOff()
console.log(laptop.isOn)