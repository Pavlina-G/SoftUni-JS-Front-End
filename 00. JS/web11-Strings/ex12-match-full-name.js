function matchFullName(names) {
    const regex = /\b[A-Z][a-z]+\s[A-Z][a-z]+\b/gm;
    let result = names.match(regex)
    console.log(result.join(', '));

}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov");