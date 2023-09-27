function* fibonacci(n) {
    let current = 0;
    let next = 1;

    while (current <= n) {
        yield current;
        [current, next] = [next, current + next];
    }
}
const fib = fibonacci(5);
// for (num of fib) console.log(num);
console.log(fib.next().value);  // 1
console.log(fib.next().value);  // 1
console.log(fib.next().value);  // 2
console.log(fib.next().value);  // 3
console.log(fib.next().value);  // 5
console.log(fib.next().value);  // undefined

