function extractText() {
    const liItems = Array.from(document.querySelectorAll('#items > li'));
    const textarea = document.getElementById('result');

    for (const li of liItems) {
        textarea.textContent += li.textContent + '\n';
    }

}