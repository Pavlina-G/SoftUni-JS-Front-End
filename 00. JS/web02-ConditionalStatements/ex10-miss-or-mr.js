// -------------------------------------------------------------------------
// Conditional (ternary) operator - condition ? exprIfTrue : exprIfFalse
// -------------------------------------------------------------------------

function addressByAgeGender(age, gender) {
    let result;
    if (age < 16) {
        result = gender === 'f' ? 'Miss' : 'Master'
    } else {
        result = gender === 'f' ? 'Ms.' : 'Mr.'

    }
    console.log(result);
}

addressByAgeGender(12, 'f');
addressByAgeGender(16, 'm');
addressByAgeGender(14, 'f');
addressByAgeGender(17, 'm');
addressByAgeGender(10, 'm');
addressByAgeGender(32, 'f');
