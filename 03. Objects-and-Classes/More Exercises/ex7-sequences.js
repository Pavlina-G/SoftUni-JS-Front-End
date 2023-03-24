function sequences(list) {
    let unique = new Set();

    for (const line of list) {
        newLine = JSON.parse(line).sort((a,b) => {return b-a});
        unique.add(newLine.toString());
    }

    let sorted = Array.from(unique).sort((a, b) => {
        if (a.split(',').length > b.split(',').length) return 1;
        if (a.split(',').length < b.split(',').length) return -1;
    })
    for (const sortedElement of sorted) {
        console.log(`[${sortedElement.split(',').join(', ')}]`);

    }
}




sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
);
sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
);