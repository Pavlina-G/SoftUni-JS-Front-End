function reverseArray(num, arr) {
    console.log(arr.reverse().slice(-num).join(' '))
}

reverseArray(2, [66, 43, 75, 89, 47])