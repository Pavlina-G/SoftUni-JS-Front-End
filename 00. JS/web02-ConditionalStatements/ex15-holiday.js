function holiday(budget, season) {
    let destination;
    let place = 'Hotel';
    let cost;

    if (budget <= 100) {
        destination = 'Bulgaria';
        season === 'summer' ? (cost = budget * 0.30, place='Camp'): (cost = budget * 0.70);
    } else if (budget < 1001) {
        destination = 'Europe'
        season === 'summer' ? (cost = budget * 0.40, place='Camp'): (cost = budget * 0.80);
    } else {
        destination = 'Asia';
        cost = budget * 0.90
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${cost.toFixed(2)}`);

}


holiday(50, "summer");
holiday(75, "winter");
holiday(312, "summer");
holiday(678.53, "winter");
holiday(1500, "summer");