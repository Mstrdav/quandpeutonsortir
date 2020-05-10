var timer = document.getElementById('timer');
var ms = document.getElementById('ms');
var m = document.getElementById('m');
var dateSortie = new Date('2020-05-11T00:00:00');

let interval = setInterval(function() {
    let time = '' + (dateSortie - new Date());
    let minutes = time.substr(0,2);
    let secondes = time.substr(2,2);
    let milis = time.substr(4,2);
    ms.innerHTML = minutes + ':' + secondes + "'";
    m.innerHTML = milis + "''";

    if(dateSortie - new Date() < 0) {
        clearInterval(interval);
        timer.innerHTML = '0';
    }
}, 10);
