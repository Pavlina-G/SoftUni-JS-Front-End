function buildPyramid(base, increment) {
    let height = 0;
    let stones = 0;
    let marble = 0;
    let lazuli = 0;
    let gold = 0;
    let counter = 0;


    while (base > 0) {
        height += 1*increment;
        counter += 1

        if (base <= 2){
            gold = (base ** 2) * increment;
            break;
        }
        currentStone = ((base - 2) ** 2) * increment;

        stones += currentStone;
        currentOther =(((base ** 2) - ((base - 2) ** 2))) * increment ;
        if (counter === 5) {
            lazuli += currentOther;
            counter = 0;
        } else {
            marble += currentOther;
        }
        base -= 2;

    }
    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

buildPyramid(11, 1);
buildPyramid(11, 0.75);
buildPyramid(12, 1);
buildPyramid(23, 0.5);