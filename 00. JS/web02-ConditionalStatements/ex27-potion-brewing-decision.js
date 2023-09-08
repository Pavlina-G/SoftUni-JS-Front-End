function brewPotion(mainIngredient, secondIngredient) {
    let result;

    if (mainIngredient === 'herbs') {
        if (secondIngredient === 'water') {
            result = 'Health potion';
        } else if (secondIngredient === 'oil') {
            result = 'Stealth potion';
        } else {
            result = 'Minor stamina potion';
        }
    } else if (mainIngredient === 'berries') {
        secondIngredient === 'sugar' ? result = 'Speed potion' : result = 'Minor energy potion';
    } else {
        result = "Can't brew any potion";
    }

    console.log(result);
}

brewPotion('herbs', 'water');
brewPotion('herbs', 'oil');
brewPotion('herbs', 'banana');
brewPotion('berries', 'sugar');
brewPotion('berries', 'banana');
brewPotion('herbs', 'sugar');