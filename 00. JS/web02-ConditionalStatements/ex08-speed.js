function speedInfo(speed) {
    let info;

    if (speed < 1) {
        info = 'no speed'
    } else if (speed > 0 && speed <= 10) {
        info = 'slow';
    } else if (speed < 61) {
        info = 'average';
    } else if (speed < 121) {
        info = 'fast';
    } else if (speed < 161) {
        info = 'super-fast';
    } else {
        info = 'turbo-fast'
    }
    console.log(info);
}

speedInfo(10);
speedInfo(59);
speedInfo(120);
speedInfo(121);
speedInfo(183);
speedInfo(0);