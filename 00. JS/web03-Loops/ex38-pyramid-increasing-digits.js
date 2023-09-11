function f(n) {
    let pattern = '',
        num = 1,
        gap;
    gap = n - 1;

    for (j = 1; j <= n; j++) {
        num = j;
        for (i = 1; i <= gap; i++) pattern += (" ");

        gap--;
        for (i = 1; i <= j; i++) {
            pattern += num;

            num++;
        }


        num--;
        num--;
        for (i = 1; i < j; i++) {
            pattern += num;
            num--;
        }
        pattern += '\n';
        console.log();

    }
    console.log(pattern);
}

f(5);
f(4);
f(3);