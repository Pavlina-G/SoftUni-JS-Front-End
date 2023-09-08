function choosePath(right, left) {
    let bothHands = [right, left]
    let path;

    if (bothHands.includes('sword')) {
        bothHands.includes('shield') ? path = 'Path to the castle' : path = 'Path to the forest';
    } else if (bothHands.includes('map')) {
        bothHands.includes('coins') ? path = 'Go to the town' : path = 'Camp at the current spot';
    } else {
        path = 'Wander aimlessly'
    }
    console.log(path);
    
}

choosePath('sword','shield');
choosePath('map', 'coins');
choosePath('torch', 'flower');