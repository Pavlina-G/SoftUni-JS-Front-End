function padawanEquipment(money, studentsNum, lightsaberPrice, robePrice, beltPrice) {
    // lightsaber 10% more, round up;
    // every 6 belt is free;
    
    let total = 0;
    let count = 0;

    total += (lightsaberPrice * Math.ceil(studentsNum * 1.10));
    total += robePrice * studentsNum;

    for (let i = 0; i < studentsNum; i++) {
        count += 1;
        if (count === 6) {
            beltPrice = 0;
            count = 0;
        }
        total += beltPrice;
    }
    if (money >= total) {
        console.log(`The money is enough - it would cost ${total.toFixed(2)}lv.`);
    } else {
        let diff = total - money;
        console.log(`George Lucas will need ${diff.toFixed(2)}lv more.`);
    }
}


padawanEquipment(100, 2, 1.0, 2.0, 3.0);
padawanEquipment(100, 6, 1.0, 2.0, 3.0);
padawanEquipment(100, 42, 12.0, 4.0, 3.0);