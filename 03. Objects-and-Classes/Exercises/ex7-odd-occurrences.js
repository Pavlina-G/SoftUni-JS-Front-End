function oddOccurrences(sentence) {
    let elements = sentence.split(' ').map((a) => a.toLowerCase())
    let oddCases = {};

    for (const element of elements) {
        if (!(element in oddCases)) {
            oddCases[element] = 1;
        } else {
            oddCases[element] += 1;
        }
    }

    entries = Object.entries(oddCases);
    let result = []

    for (const [key, value] of entries) {
        if (value % 2 !== 0) {
            result.push(key)
        }
    }
    console.log(result.join(' '))

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');