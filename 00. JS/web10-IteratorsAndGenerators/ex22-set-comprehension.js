let data = [1, 2, 3, 4, 5];
let data1 = ['a','b','c'];
let data2 = [5,6,7,8,9];
// let set = new Set(data);
let set1 = new Set(data1);
let set2 = new Set(data2);


// function* genSet(data, n) {
//     let set = data.keys();
  
//     for (let key of set) {
//         yield key * n;
//     }

// }
function* genSet(data2, n) {
    let set = data2.keys();
  
    for (let key of set) {
        yield key - n;
    }

}

// function* genSetUpper(data1) {
//     let set = data1.values();
  
//     for (let key of set) {
//         yield key.toUpperCase();
//     }
// }


// let iter = genSet(set, 2);
let iter2 = genSet(set2, 4);
// let iter1 = genSetUpper(data1);

// for (const key of iter) {
//     console.log(key);
// }

// for (const key of iter1) {
//     console.log(key);
// }

for (const key of iter2) {
    console.log(key);
}