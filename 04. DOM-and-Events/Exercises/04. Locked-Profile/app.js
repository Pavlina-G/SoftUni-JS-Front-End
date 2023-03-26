function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName('button'));

    buttons.forEach(
        (b) => {
            b.addEventListener('click', showHideInfo);
        }
    )

    function showHideInfo(e) {
        const btn = e.currentTarget
        const [lock, unlock] = Array.from(btn.parentElement.querySelectorAll('input[type=radio]'))
        const info = btn.parentElement.querySelector('div')

        if (unlock.checked && btn.textContent === 'Show more') {
            info.style.display = 'block';
            btn.textContent = 'Hide it';
        } else if (unlock.checked && btn.textContent === 'Hide it') {
            info.style.display = 'none';
            btn.textContent = 'Show more';
        }
    }
}