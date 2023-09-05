function convertMinutes(minutes) {
    let hours = Math.floor(minutes / 60);
    let min = minutes % 60

    console.log(`${padTo2Digits(hours)}:${padTo2Digits(min)}`)
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

convertMinutes(60);
convertMinutes(90);
convertMinutes(325);