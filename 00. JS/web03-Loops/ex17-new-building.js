function building(floors, rooms) {



    for (let i = floors; i > 0; i--) {
        let result = [];
        for (j = 0; j < rooms; j++) {
            if (i === floors) {
                result.push('L' + i + j);
            } else if (i % 2 === 0) {
                result.push('O' + i + j);
            } else if (i % 2 != 0) {
                result.push('A' + i + j);
            }
        }
        if (floors === 1) {
            console.log(result.join(' '));
            break;
        }
        console.log(result.join(' '));



    }

}

building(1, 4);
building(6, 4);
building(3, 3);
building(4, 4);