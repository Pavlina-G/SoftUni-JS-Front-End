function printJSON(name, lastName, eyeColor) {
    let person = {
        name,
        lastName,
        eyeColor,
    };

    console.log(JSON.stringify(person));
}

printJSON("Ivan", "Ivanov", "blue");
printJSON("Maria", "Petrova", "brown");
