function deleteByEmail() {
    const emails = Array.from(document.querySelectorAll('tbody tr td:nth-child(even)'));
    const input = document.querySelector('input[name="email"]');

    const result = document.getElementById('result');

    for (const email of emails) {
        if (email.textContent === input.value) {
            email.parentElement.remove();
            result.textContent = 'Deleted.';
        } else {
            result.textContent = 'Not found.';
        }
    }
    input.value = '';

}