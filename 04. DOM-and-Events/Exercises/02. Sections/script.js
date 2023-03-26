function create(words) {
    const parentDiv = document.getElementById('content');

    for (const word of words) {
        const newDiv = document.createElement('div');
        const newP = document.createElement('p');
        newP.textContent = word;
        newP.style.display = 'none';
        newDiv.appendChild(newP);
        newDiv.addEventListener("click", () => {
            newP.style.display = 'block';
        })
        parentDiv.appendChild(newDiv);

        // function displayHandler(e) {
        //     const p = e.currentTarget.children[0]
        //     p.style.display = 'block'
        // }
    }
}