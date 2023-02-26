function sortingNumbers(array) {
    let initialSort = array.sort((a, b) => a - b);
    let sortedArray = [];
    while (initialSort.length > 0) {
        sortedArray.push(initialSort.shift(), initialSort.pop());
    }
    return sortedArray;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))