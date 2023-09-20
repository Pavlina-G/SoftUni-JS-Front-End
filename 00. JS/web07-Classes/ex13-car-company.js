const input = ['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
const register = {};

for (let line of input) {
    const [brand, model, quantity] = line.split(' | ')
    let producedCars = Number(quantity)
    let carModel = {};
    carModel[model] = producedCars;

    if (!(brand in register)) {
        register[brand] = {};
    }
    if (model in register[brand]) {
        register[brand][model] += producedCars;
        continue;
    }
    register[brand][model] = producedCars;
}

for (let brand in register) {
    console.log(brand);
    Object.entries(register[brand]).forEach(m => {
        console.log(`###${m[0]} -> ${m[1]}`);
    })
}




