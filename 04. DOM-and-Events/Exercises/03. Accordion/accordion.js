function toggle() {
    const btn = document.getElementsByClassName('button')[0];
    const divP = document.getElementById('extra');

    if (btn.textContent === 'More') {
        divP.style.display = 'block';
        btn.textContent = 'Less';
    } else if (btn.textContent === 'Less') {
        divP.style.display = 'none';
        btn.textContent = 'More';
    }
}