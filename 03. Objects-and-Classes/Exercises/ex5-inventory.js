function inventory(info) {
    let heros = [];
    for (const item of info) {
        let [name, level, items] = item.split(' / ');
        let hero = {Hero: name, level: Number(level)};
        if (items) {
            hero.items = items;
        }
        heros.push(hero);
    }
    for (hero of heros.sort(
        (a, b) => {
            return a.level - b.level
        }
    )) {
        let entries = Object.entries(hero)
        for (const [key, value] of entries) {
            if (key === 'Hero') {
                console.log(`${key}: ${value}`);
            } else {
                console.log(`${key} => ${value}`);
            }
        }
    }

}

inventory([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara',
    ]
)