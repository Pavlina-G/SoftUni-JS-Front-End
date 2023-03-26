function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const rows = Array.from(document.querySelectorAll('tbody tr'))
        const input = document.getElementById('searchField')

        for (const row of rows) {
            if (row.classList.contains('select')) {
                row.classList.remove('select');
            }
            if (row.textContent.toLowerCase().includes(input.value.toLowerCase())) {
                row.classList.add('select')
            }
        }

        input.value = '';

    }
}