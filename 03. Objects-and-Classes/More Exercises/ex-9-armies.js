function armies(info) {
    let armies = {};

    for (const line of info) {
        if (line.includes('arrives')) {
            let leader = line.slice(0, line.indexOf('arrives') - 1);
            armies[leader] = {};
        } else if (line.includes('defeated')) {
            let leader = line.slice(0, line.indexOf('defeated') - 1);
            if (leader in armies) {
                delete armies[leader];
            }
        } else if (line.includes(':')) {
            let [name, armyInfo] = line.split(': ');
            let [army, count] = armyInfo.split(', ');
            if (name in armies) {
                armies[name][army] = Number(count);
            }
        } else {
            let [army, count] = line.split(' + ');
            for (const key in armies) {
                if (armies[key][army]) {
                    armies[key][army] += Number(count);
                }
            }
        }
    }
    for (const leader in armies) {

        let total = 0;
        for (const k in armies[leader]) {
            total += armies[leader][k];
        }
        armies[leader]['total'] = total;
    }

    let sorted = Object.entries(armies).sort((a, b) => {
        return b[1].total - a[1].total;
    })

    for (const leader of sorted) {
        console.log(`${leader[0]}: ${leader[1].total}`);
        delete leader[1].total;

        Object.entries(leader[1]).sort((a, b) => {
            return b[1] - a[1];
        }).forEach((obj) => console.log(`>>> ${obj[0]} - ${obj[1]}`))
    }
}

// armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);
armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);