

function colorize() {
    const evenRows = Array.from(document.querySelectorAll('tr:nth-child(even)'));
    evenRows.forEach((row) => {
        return row.style.backgroundColor = "Teal"
    })

}

// const button = document.getElementsByTagName('button')[0]
// button.addEventListener("click", btnClick)
// function btnClick() {
//     const evenRows = Array.from(document.querySelectorAll('tr:nth-child(even)'));
//     for (const row of evenRows) {
//         row.style.backgroundColor = 'Teal'
//     }
// }