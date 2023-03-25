function sumTable() {

    const costs = Array.from(document.querySelectorAll('tr td:nth-child(2)'));
    costs.pop();
    let sum = 0;

    const result = document.getElementById('sum');

    for (const cost of costs) {
        sum += Number(cost.textContent);
    }
    result.textContent = sum;;

}