function paint(yellow) {
    if (yellow < 10 || yellow > 100) {
        console.log('The yellow color must be between 10 and 100 l.')
        return
    }
    let red = yellow / 4;
    let white = yellow * 2;
    let total = red + yellow + white;

    console.log(`Red: ${red}`)
    console.log(`Yellow: ${yellow}`)
    console.log(`White: ${white}`)
    console.log(`Total: ${total}`)
}

paint(7);
paint(701);
paint(10);
paint(17);
paint(42);