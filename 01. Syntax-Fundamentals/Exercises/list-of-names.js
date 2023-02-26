function listOfNames(names) {
    names.sort((a, b) => a.localeCompare(b));
    names.forEach(
        (name) => {
            console.log(`${names.indexOf(name) + 1}.${name}`);
        }
    )
}

// function listOfNames(names) {
//     return [...names]
//         .sort((aName, bName) => aName.localeCompare(bName))
//         .map((name, index) => `${index+1}.${name}`)
//         .join('\n')
// }

listOfNames(["John", "Bob", "Christina", "Ema"])
// console.log(listOfNames(["John", "Bob", "Christina", "Ema"]))