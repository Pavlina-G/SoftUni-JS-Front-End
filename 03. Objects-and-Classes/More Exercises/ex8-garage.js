function garage(carList) {
    let garage = {};


    for (const item of carList) {
        let [garageNum, info] = item.split(' - ');

        let carInfo = info.split(', ');

        if (!(garageNum in garage)) {
            garage[garageNum] = [];
        }
        garage[garageNum].push(carInfo);
    }

    for (const key in garage) {
        console.log(`Garage № ${key}`);
        garage[key].forEach((el) => console.log(`--- ${el.join(', ').replace(/: /g, ' - ')}`));
    }

}

// garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']
);