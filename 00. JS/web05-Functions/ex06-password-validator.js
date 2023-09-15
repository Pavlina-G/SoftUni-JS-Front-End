function checkPassword(pass) {
    let password = pass.split("");
    let valid = true;

    function lenValid(word) {
        return word.length >= 6 && word.length <= 10;
    }
    function validChars(word) {
        for (ch of word) {
            let idx = ch.charCodeAt(0);
            if (
                (idx >= 48 && idx <= 57) ||
                (idx >= 65 && idx <= 90) ||
                (idx >= 97 && idx <= 122)
            ) {
                continue;
            } else {
                return false;
            }
        }
        return true;

    }

    function checkCountDigits(word) {
        let count = 0;
        for (ch of word) {
            let idx = ch.charCodeAt(0);
            if (idx >= 48 && idx <= 57) {
                count += 1;
            }
        }
        if (count < 2) {
            return false;
        } else {
            return true;
        }
    }
    if (!lenValid(password)) {
        valid = false;
        console.log("Password must be between 6 and 10 characters");
    }
    if (!validChars(password)) {
        valid = false;
        console.log("Password must consist only of letters and digits");
    }
    if (!checkCountDigits(password)) {
        valid = false;
        console.log("Password must have at least 2 digits");
    }
    if (valid) {
        console.log("Password is valid");
    }
}

checkPassword("pass");
checkPassword("APass123");
checkPassword("Pa$s$s");
