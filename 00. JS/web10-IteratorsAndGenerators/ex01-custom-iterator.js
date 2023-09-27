const obj = {
    a: 'apple',
    b: 'banana',
    c: 'cherry',

    [Symbol.iterator]() {
        const keys = Object.keys(obj);
        let idx = 0;
        return {
            next: () => {
                if (idx < keys.length) {
                    return { value: obj[keys[idx++]], done: false };
                } else {
                    return { done: true };
                }
            }
        }
    }
};
// obj[Symbol.iterator] = function () {
//     const keys = Object.keys(obj);
//     let idx = 0;
//     return {
//         next: () => {
//             if (idx < keys.length) {
//                 idx += 1;
//                 return { value: obj[keys], done: false };
//             } else {
//                 return { done: true };
//             }
//         }
//     }
// };

for (const value of obj) {
    console.log(value);
}
