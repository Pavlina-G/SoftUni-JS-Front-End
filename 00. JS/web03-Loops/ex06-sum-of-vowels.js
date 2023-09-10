function f(text) {
    let sum = 0;
    const vowels = {
        'a': 1,
        'e': 2,
        'i': 3,
        'o': 4,
        'u': 5,
    }

    for (let i = 0; i < text.length; i++) {
        if ((text[i]) in vowels) {
            sum += vowels[text[i]]
        }
    }
    console.log(sum);
}


f("hello");
f("hi");
f("bye");
f("zzzz");