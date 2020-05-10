var timer = document.getElementById('timer');
var ms = document.getElementById('ms');
var m = document.getElementById('m');
var dateSortie = new Date('2020-05-11T00:00:00');

let interval = setInterval(function() {
    let now = new Date()
    let time = (dateSortie - now);
    let minutes = 60 - now.getMinutes();
    let secondes = 60 - now.getSeconds();
    let milis = 1000 - now.getMilliseconds();
    ms.innerHTML = minutes + ':' + secondes + "'";
    m.innerHTML = milis + "''";

    if(time < 0) {
        clearInterval(interval);
        timer.innerHTML = '0';
        document.body.classList = 'gradient';
    }
}, 10);
