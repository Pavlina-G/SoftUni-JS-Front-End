function phoneBook(strArray) {
    let phoneBook = {}
    for (const el of strArray) {
        [name, phone] = el.split(' ');
        phoneBook[name]= phone;
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
);