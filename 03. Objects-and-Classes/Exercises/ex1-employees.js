function employees(info) {
    // let employeesInfo = {}
    let employeesInfo = info.reduce(
        (data, employee) => {
            data[employee] = employee.length;
            return data;
        }, {}
    );

    // for (const employee of info) {
    //     employeesInfo[employee] = employee.length;
    // }

    for (const info in employeesInfo) {
        console.log(`Name: ${info} -- Personal Number: ${employeesInfo[info]}`);
    }

}

employees([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
);
employees([
        'Samuel Jackson',
        'Will Smith',
        'Bruce Willis',
        'Tom Holland'
    ]
);