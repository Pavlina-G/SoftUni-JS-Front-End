function horseRacing(info) {
    let horses = info.shift().split('|')



    for (const line of info) {
        if (line.startsWith('Finish')) {
            break;
        } else if (line.startsWith('Retake')) {
            let [command, overtakingHorse, takenHorse] = line.split(' ')
            horses = retakeHorse(overtakingHorse, takenHorse)
        } else if (line.startsWith('Trouble')) {
            let [command, horse] = line.split(' ')
            horses = troubleHorse(horse)
        } else if (line.startsWith('Rage')) {
            let [command, horse] = line.split(' ')
            horses = rageHorse(horse)

        } else if (line.startsWith('Miracle')) {
            horses = miracle()

        }
    }

    console.log(horses.join('->'))
    let winner = horses.pop()
    console.log(`The winner is: ${winner}`)




    function retakeHorse(overtaken, taken) {
        let newHorses
        let copyHorse = [...horses]

        let firstIdx = horses.indexOf(overtaken)
        let secondIdx = horses.indexOf(taken)

        if (firstIdx < secondIdx) {
            newHorses = copyHorse.splice(firstIdx, 1, taken)
            newHorses = copyHorse.splice(secondIdx, 1, overtaken)
            console.log(`${overtaken} retakes ${taken}.`)
        }

        return copyHorse
    }

    function troubleHorse(horse) {
        let newHorses

        let index = horses.indexOf(horse)
        let copyHorse = [...horses]
        if (index !== 0) {
            let secondIdx = index - 1;
            newHorses = copyHorse.splice(index, 1)
            newHorses = copyHorse.splice(secondIdx, 0, horse)

            console.log(`Trouble for ${horse} - drops one position.`)
        }

        return copyHorse

    }

    function rageHorse(horse) {
        let newHorses
        let lastIdx = horses.length - 1

        let index = horses.indexOf(horse)
        let copyHorse = [...horses]

        if (index === lastIdx - 1) {
            newHorses = copyHorse.splice(index, 1)
            newHorses = copyHorse.splice(lastIdx, 0, horse)
        } else if (index < lastIdx - 1) {
            let newIdx = index + 2;
            newHorses = copyHorse.splice(index, 1)
            newHorses = copyHorse.splice(newIdx, 0, horse)

        }

        console.log(`${horse} rages 2 positions ahead.`)
        return copyHorse
    }

    function miracle() {
        let lastHorse = horses.shift()
        let lastIdx = horses.length - 1
        let copyHorses = [...horses]

        let newHorses = copyHorses.splice(lastIdx+1, 0, lastHorse)
        console.log(`What a miracle - ${lastHorse} becomes first.`)
        return copyHorses
    }


}

horseRacing
(['Bella|Alexia|Sugar',
    'Retake Alexia Sugar',
    'Rage Bella',
    'Trouble Bella',
    'Finish']
);
// horseRacing((['Onyx|Domino|Sugar|Fiona',
//     'Trouble Onyx',
//     'Retake Onyx Sugar',
//     'Rage Domino',
//     'Miracle',
//     'Finish'])
// );
// horseRacing((['Fancy|Lilly',
//     'Retake Lilly Fancy',
//     'Trouble Lilly',
//     'Trouble Lilly',
//     'Finish',
//     'Rage Lilly'])
// );