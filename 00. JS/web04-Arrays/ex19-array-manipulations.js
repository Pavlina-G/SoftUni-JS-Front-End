function arrayOfNumbers(data) {
    let [numbers, ...commands] = data;
    numbers = numbers.split(' ');

    for (let action of commands) {
        let num = 0;
        let idx = 0;
        if (action.startsWith('Add')) {
            [_, num] = action.split(' ')
            numbers.push(num)
        } else if (action.startsWith('Remove ')) {
            [_, num] = action.split(' ');
            idx = numbers.indexOf(num);
            numbers.splice(idx, 1);

        } else if (action.startsWith('RemoveAt')) {
            [_, idx] = action.split(' ')

            if (Number(idx) >= 0) {
                numbers.splice(Number(idx), 1);
            }
        } else {
            [_, num, idx] = action.split(' ')

            if (Number(idx) >= 0) {
                numbers.splice(Number(idx), 0, num);
            }
        }

    }
    console.log(numbers);

}

arrayOfNumbers(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);