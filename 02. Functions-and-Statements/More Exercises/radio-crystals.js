function radioCrystals([target, ...chunks]) {

    let printInfo = () => console.log(`Transporting and washing`);
    let cut = (crystal) => crystal / 4;
    let lap = (crystal) => crystal * 0.80;
    let grind = (crystal) => crystal - 20;
    let etch = (crystal) => crystal - 2;
    let xRay = (crystal) => crystal + 1;
    let isXRay = false;
    let transportAndWash = (crystal) => Math.floor(crystal)
    let counters = {}

    for (chunk of chunks) {
        let currentChunk = chunk
        counters = {
            'cutCounter': 0,
            'lapCounter': 0,
            'grindCounter': 0,
            'etchCounter': 0,
            'xRayCounter': 0,
        }

        console.log(`Processing chunk ${chunk} microns`)

        while (cut(currentChunk) >= target) {
            currentChunk = cut(currentChunk);
            counters['cutCounter'] += 1;
            currentChunk = transportAndWash(currentChunk);
        }

        while (lap(currentChunk) >= target) {
            currentChunk = lap(currentChunk);
            counters['lapCounter'] += 1;
            currentChunk = transportAndWash(currentChunk);
        }
        while (grind(currentChunk) >= target) {
            currentChunk = grind(currentChunk);
            counters['grindCounter'] += 1;
            currentChunk = transportAndWash(currentChunk);
        }
        while (etch(currentChunk) >= target || etch(currentChunk) === target - 1) {
            currentChunk = etch(currentChunk);
            counters['etchCounter'] += 1;
            currentChunk = transportAndWash(currentChunk);
        }
        if (!isXRay && xRay(currentChunk) === target) {
            currentChunk = xRay(currentChunk);
            counters['xRayCounter'] += 1;
            isXRay = true;
        }
        for (var counter in counters) {
            if (counters[counter] > 0) {
                if (counter.includes('cut')) {
                    console.log(`Cut x${counters[counter]}`);
                    printInfo();
                }
                if (counter.includes('lap')) {
                    console.log(`Lap x${counters[counter]}`);
                    printInfo();
                }
                if (counter.includes('grind')) {
                    console.log(`Grind x${counters[counter]}`);
                    printInfo();
                }
                if (counter.includes('etch')) {
                    console.log(`Etch x${counters[counter]}`);
                    printInfo();
                }
                if (counter.includes('xRay')) {
                    console.log(`X-ray x${counters[counter]}`);
                }
            }
        }

        console.log(`Finished crystal ${currentChunk} microns`);
    }

}

// radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);