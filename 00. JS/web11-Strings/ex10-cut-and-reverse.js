function cutAndReverse(text) {
    let len = text.length - 1;
    let half = len / 2;
    let first = text.slice(0, half + 1);
    let second = text.slice(half + 1);
    console.log(first.split('').reverse().join(''));
    console.log(second.split('').reverse().join(''));

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');