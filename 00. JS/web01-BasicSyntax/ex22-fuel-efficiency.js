function calcFuelEfficiency(distance, liters) {
    
    let fuelEfficiency = distance / liters;
    
    console.log(fuelEfficiency.toFixed(2));
}

calcFuelEfficiency(500, 40);
calcFuelEfficiency(600, 40);
calcFuelEfficiency(750, 40);