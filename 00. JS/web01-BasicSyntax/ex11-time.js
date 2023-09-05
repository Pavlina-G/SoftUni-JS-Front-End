function convertMinutes(minutes) {
    let hours = Math.floor(minutes / 60);
    let min = minutes % 60

    console.log(`${hours}:${min}`)
}

convertMinutes(60);
convertMinutes(90);
convertMinutes(325);