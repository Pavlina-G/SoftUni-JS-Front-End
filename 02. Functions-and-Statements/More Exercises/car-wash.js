function carWash(commands) {
    let start = 0;
    for (command of commands) {
        if (command === 'soap') {
            start += 10;
        } else if (command === 'water') {
            start *= 1.20
        } else if (command === 'vacuum cleaner') {
            start *= 1.25
        } else if (command === 'mud') {
            start -= start * 0.10
        }
    }

    console.log(`The car is ${start.toFixed(2)}% clean.`)
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);