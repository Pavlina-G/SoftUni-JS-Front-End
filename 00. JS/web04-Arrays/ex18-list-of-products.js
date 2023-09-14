function printOrderedArr(arr = []) {
    let sorted = arr.sort();
    sorted.forEach((el,idx)=>console.log(`${idx+1}.${el}`));
}

printOrderedArr(["Potatoes","Tomatoes","Onions","Apples"])