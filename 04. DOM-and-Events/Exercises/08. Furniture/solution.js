function solve() {
    const [inputText, output] = Array.from(document.getElementsByTagName('textarea'));
    const [generateBtn, buyBtn] = Array.from(document.getElementsByTagName('button'));


    generateBtn.addEventListener("click", addProducts);
    buyBtn.addEventListener("click", summary);


    function addProducts() {
        const data = JSON.parse(inputText.value);

        let tbody = document.getElementsByTagName('tbody')[0];

        for (const line of data) {
            let row = document.createElement("tr");
            let input = createElement('input', 'checkbox')

            for (let key in line) {

                if (key === 'name' || key === 'price' || key === 'decFactor') {
                    el = createElement('p', line[key]);
                } else {
                    el = createElement(key, line[key]);
                }

                let col = document.createElement('td')
                col.appendChild(el);

                // if (col.firstChild.nodeName === 'IMG') {
                // console.log(col.firstElementChild.tagName)
                if (col.firstElementChild.tagName === 'IMG') {
                    row.prepend(col);
                } else {
                    row.appendChild(col);
                }

            }
            let tdInput = document.createElement('td')
            tdInput.appendChild(input);
            row.appendChild(tdInput);

            tbody.appendChild(row);
        }
    }

    function createElement(type, content) {
        let element;
        if (type === 'p') {
            element = document.createElement(type);
            element.textContent = content;
        } else if (type === 'img') {
            element = document.createElement(type);
            element.src = content;
        } else if (type === 'input') {
            element = document.createElement(type);
            element.type = content;
        }
        return element;
    }

    function summary() {
        const rows = Array.from(document.querySelectorAll('tbody tr'));
        let products = [];
        let totalPrice = 0;
        let averageDecFactor = 0;
        for (const row of rows) {

            let input = row.children[4].childNodes[0]

            if (input.checked) {
                let product = row.children[1].textContent;
                let price = Number(row.children[2].textContent);
                let decFactor = Number(row.children[3].textContent);

                products.push(product);
                totalPrice += price
                averageDecFactor += decFactor
            }

        }
        averageDecFactor /= products.length

        output.value = `Bought furniture: ${products.join(', ')}` + '\n';
        output.value += `Total price: ${totalPrice.toFixed(2)}` + '\n';
        output.value += `Average decoration factor: ${averageDecFactor}`

    }
}