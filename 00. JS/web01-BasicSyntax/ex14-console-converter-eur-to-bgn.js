function f(eur) {
    const rateEurBgn = 1.95583
    let result = eur * rateEurBgn
    
    console.log(result.toFixed(2));
}

f(1);
f(15);
f(123);
f(0.5);
f(0.51);