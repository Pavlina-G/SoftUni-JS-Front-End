function addressBook(info) {
    let addressBook = {};

    for (const el of info) {
        [name, address] = el.split(':');
        addressBook[name] = address;
    }

    let sortedInfo = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]))

    for (const [key, value] of sortedInfo) {
        console.log(`${key} -> ${value}`);
    }
}


addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);
