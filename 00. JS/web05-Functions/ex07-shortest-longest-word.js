function printWords(text) {
    const words = text.split(' ')
    let max = 0;
    let long = '';
    let short = '';
    let min = 999999999;

    for (w of words) {
        w = w.replace(/[^a-zA-Z ]/g, '');

        if (w.length > max) {
            max = w.length;
            long = w;
        }
        if (w.length < min && w.length > 0) {
            min = w.length;
            short = w;
        }
    }
    console.log(`Longest -> ${long}\nShortest -> ${short}`);
}


printWords('Hello how are you today? I hope you are fine ');
printWords('Lorem Ipsum is dummy text of the typesetting industry.');