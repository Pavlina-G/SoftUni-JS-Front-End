function printHours() {
    for (h = 0; h < 24; h++) {
        for (m = 0; m < 60; m++) {
            console.log(`${addZero(h)}:${addZero(m)}`);
        }
    }

    function addZero(n) {
        if (n < 10) {
            return `0${n}`
        } else return n
    }
}

printHours();