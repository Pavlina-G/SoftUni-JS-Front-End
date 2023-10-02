function encryptMessages(data = []) {
    const attacked = [];
    const destroyed = [];
    const regexStar = /[STARstar]/gm;

    for (let m of data) {
        let newMessage = '';
        let count = m.match(regexStar).length;
        for (let ch of m) {
            newMessage += String.fromCharCode(ch.charCodeAt(0) - count);
        }
        let regex = /@(?<name>[A-Z][a-z]+)[^@!\->:]*:(?<population>\d+)[^@!\->]*!(?<attack>[A|D])![^@!\->:]*->(?<soldiers>\d+)/gm;
        let match = regex.exec(newMessage);
        if (match !== null) {
            match.groups.attack === 'D' ? destroyed.push(match.groups.name) : attacked.push(match.groups.name);
        }
    }
    console.log(`Attacked planets: ${attacked.length}`);
    attacked.forEach(p => console.log(`-> ${p}`));
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.forEach(p => console.log(`-> ${p}`));

}

encryptMessages(['STCDoghudd4=53333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']
);
encryptMessages(["tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
)