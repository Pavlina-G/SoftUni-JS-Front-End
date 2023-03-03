function checkPassword(password) {
    let isValid = true;

    const isLengthValid = (pass) => pass.length >= 6 && pass.length <= 10;
    const hasOnlyLettersDigits = (pass) => /^[A-Za-z0-9]+$/g.test(pass);
    const hasAtLeastTwoDigits = (pass) => [...pass.matchAll(/\d/g)].length >= 2;

    if (!isLengthValid(password)) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }
    if (!hasOnlyLettersDigits(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }
    if (!hasAtLeastTwoDigits(password)) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }
    if (isValid) {
        console.log("Password is valid");
    }

}

checkPassword('logIn');
checkPassword('MyPass123');
checkPassword('Pa$s$s');