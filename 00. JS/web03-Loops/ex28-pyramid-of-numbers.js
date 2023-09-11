function print(n) {

    let end = false

    let string = "";
    let count = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            string += count + " ";
            count++;
            if (count === n + 1) {
                end = true
                break;
            }
        }
        string += "\n";
        if (end) {
            break
        }
    }
    console.log(string);
}

print(7);
print(10);
print(12);
print(15);