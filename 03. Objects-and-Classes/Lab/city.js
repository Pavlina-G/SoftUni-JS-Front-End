function city(info) {
    cityInfo = Object.entries(info);

    // for (const [key, value] of cityInfo) {
    //     console.log(`${key} -> ${value}`);
    // }

    for (const key in info) {
        console.log(`${key} -> ${info[key]}`);
    }
}

city({
        name: "Sofia",
        area: 492,
        population: 1238438,
        country: "Bulgaria",
        postCode: "1000"
    }
);
city({
        name: "Plovdiv",
        area: 389,
        population: 1162358,
        country: "Bulgaria",
        postCode: "4000"
    }
);