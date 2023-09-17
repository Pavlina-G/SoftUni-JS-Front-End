function phonebook(data = []) {
    const phonebook = {};
    for (let line of data) {
        splitLine = line.replace(' ', '#')
        let [name, phone] = splitLine.split('#')
        phonebook[name] = phone;
    }
    for (let key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}

phonebook(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"]);
phonebook(["Maria 123", "Samantha 456", "Nicole 789"]);
