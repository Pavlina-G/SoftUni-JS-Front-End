function addItem() {
    const select = document.getElementById('menu');
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.textContent = inputText.value;
    option.value = inputValue.value;
    select.appendChild(option)

    inputText.value = '';
    inputValue.value = '';
}