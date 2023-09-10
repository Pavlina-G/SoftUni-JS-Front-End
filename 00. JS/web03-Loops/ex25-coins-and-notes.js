function coins(lv1, lv2, lv5, target) {
    for (let i = 0; i < lv1 + 1; i++) {
        for (let j = 0; j < lv2 + 1; j++) {
            for (let k = 0; k < lv5 + 1; k++) {
                if ((i * 1 + j * 2 + k * 5) === target) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${target} lv.`);
                }
            }
        }
    }
}

coins(3, 2, 3, 10);
coins(5, 3, 1, 7);