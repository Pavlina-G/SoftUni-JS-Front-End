function convertJsonToObj(json) {
    const obj = JSON.parse(json)
    
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

convertJsonToObj('{"name": "Ivan", "age": 40, "town": "Sofia"}');
convertJsonToObj('{"firstName": "Ivan", "lastName": "Ivanov"}');