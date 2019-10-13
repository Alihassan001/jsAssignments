var second = 0;
var minute = 0;
var hour = 0;
setInterval(() => {
    second++;
    if (second / 60 === 1) {
        second = 0;
        minute++;
        if (minute / 60 === 1) {
            minute = 0;
            hour++
        }
    }

    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = " : " + minute;
    document.getElementById('second').innerHTML = " : " + second;
}, 1000);