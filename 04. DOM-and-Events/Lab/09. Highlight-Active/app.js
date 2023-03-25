function focused() {
    const inputs = document.getElementsByTagName('input');

    for (const input of inputs) {
        input.addEventListener("focus", focusHandler)
        input.addEventListener("blur", blurHandler)
    }

    function focusHandler(event) {
        let parentDiv = event.currentTarget.parentElement;
        parentDiv.classList.add('focused');
    }

    function blurHandler(event) {
        let parentDiv = event.currentTarget.parentElement
        if (parentDiv.classList.contains('focused')) {
            parentDiv.classList.remove('focused');
        }
    }

}