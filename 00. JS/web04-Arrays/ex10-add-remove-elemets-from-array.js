function addRemove(commands = []) {
    let result = [];
    let i = 0;

    while (commands.length > 0) {
        let command = commands.shift();

        if (command === 'add') {
            result.push(i + 1)
        }
        else {
            if (result.length > 0) {
                result.splice(i - 1, 1);
                i -= 1
            }
        }
        i += 1
    }

    if (result.length > 0) {
        console.log(result.join(' '));
    } else {
        console.log('Empty');
    }
}

addRemove(['add', 'add', 'add', 'add']);
addRemove(['add', 'add', 'remove', 'add', 'add']);
addRemove(['add', 'remove', 'remove', 'add', 'add']);
addRemove(['remove', 'remove', 'remove']);