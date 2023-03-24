function catalogue(products) {
    let catalogue = {}

    for (const line of products.sort((a, b) => {
        return a.localeCompare(b)
    })) {
        let [product, priceStr] = line.split(' : ')
        let price = Number(priceStr);

        let group = product[0]
        if (!(group in catalogue)) {
            catalogue[group] = [[product, price]]
        } else {
            catalogue[group].push([product, price])
        }
    }

    let sorted = sortByKey(catalogue)

    function sortByKey(obj) {
        let sorted = {}
        Object.keys(obj).sort((a, b) => {
            return a.localeCompare(b)
        }).forEach(
            (key) => sorted[key] = obj[key]
        )
        return sorted;
    }

    let result = [];

    for (const key in sorted) {
        console.log(key);
        sorted[key].forEach(([k, v]) => console.log(`  ${k}: ${v}`));
    }
}

catalogue([
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);
catalogue([
        'Omlet : 5.4',
        'Shirt : 15',
        'Cake : 59'
    ]
);