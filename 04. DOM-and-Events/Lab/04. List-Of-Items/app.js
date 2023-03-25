function addItem() {
    const input = document.getElementById('newItemText');
    const ul = document.getElementById('items');

    let newLi = document.createElement('li');
    newLi.textContent = input.value;
    ul.appendChild(newLi);
    input.value = '';
}