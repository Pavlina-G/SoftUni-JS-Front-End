function meetings(info) {
    let schedule = {};

    for (const el of info) {
        [day, name] = el.split(' ');
        if (!(day in schedule)) {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`)
        } else {
            console.log(`Conflict on ${day}!`)
        }
    }

    for (const day in schedule) {
        console.log(`${day} -> ${schedule[day]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);