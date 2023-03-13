function personInfo(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age),
    }

    return person;

    // let entries = Object.entries(person);
    //
    // for (let [key, value] of entries) {
    //     console.log(`${key}: ${value}`);
    // }
}

console.log(personInfo("Peter",
    "Pan",
    "20"
));
console.log(personInfo("George",
    "Smith",
    "18"
));