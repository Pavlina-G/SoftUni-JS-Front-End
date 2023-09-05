function waterConsumption(liters, people){

    let dailyConsumption = liters / 7 / people
    console.log(dailyConsumption.toFixed(2));
    
}

waterConsumption(2450, 7);
waterConsumption(3150, 10);
waterConsumption(980, 7);