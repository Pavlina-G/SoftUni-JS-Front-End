function calcBmi(weight, height){

    // let bmi = weight / Math.pow(height, 2);
    let bmi = weight / (height ** 2);

    console.log(bmi.toFixed(2));

}

calcBmi(70, 1.73);
calcBmi(60, 1.75);
calcBmi(85, 1.80);
calcBmi(64, 1.76);