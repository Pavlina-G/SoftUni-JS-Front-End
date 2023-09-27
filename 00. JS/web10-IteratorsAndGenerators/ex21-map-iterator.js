const map = {
    1: 'a', 2: 'b', 3: 'c',}
const iter = Object.entries(map)[Symbol.iterator]();

for (const [key,value] of iter){
    console.log(`${key}-${value}`);
}