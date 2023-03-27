function solve() {
    const output = document.getElementById('output');
    const textarea = document.getElementsByTagName('textarea')[0].value;

    let listText = textarea.split('.');
    listText.pop();

    let p = ''

    while (listText.length > 0) {

        p = listText.splice(0, 3).join('.') + '.';

        let newP = document.createElement('p');
        newP.textContent = p;
        output.appendChild(newP);
        p = '';

    }

}