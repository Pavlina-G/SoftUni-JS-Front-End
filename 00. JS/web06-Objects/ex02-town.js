function printObj(obj={}){
    for (let key in obj){
        console.log(`${key} -> ${obj[key]}`);
    }
}

printObj({
    name: "Sofia",
    population: 1234567,
    country: "Bulgaria",
    postcode: "1000"
}
)