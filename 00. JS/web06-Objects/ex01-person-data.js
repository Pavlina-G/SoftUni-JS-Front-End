function showPersonData(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age
    }
    return person
}

console.log(showPersonData("Ivan", "Ivanov", 29));
console.log(showPersonData("Maria", "Marinova", 13));