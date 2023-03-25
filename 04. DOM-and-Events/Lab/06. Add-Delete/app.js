function addItem() {
    const input = document.getElementById('newItemText');
    const ul = document.getElementById('items');

    const newLi = document.createElement('li');
    const newAnchor = document.createElement('a')

    newLi.textContent = input.value;
    newAnchor.setAttribute('href', '#');
    // newAnchor.href = '#';
    newAnchor.textContent = '[Delete]';
    newAnchor.addEventListener("click", deleteHandler);
    newLi.appendChild(newAnchor)
    ul.appendChild(newLi);
    input.value = '';

    function deleteHandler(event) {
        const li = event.currentTarget.parentElement;
        li.remove();
    }
}