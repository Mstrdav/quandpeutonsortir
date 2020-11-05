var timer = document.getElementById('timer');
var ms = document.getElementById('ms');
var m = document.getElementById('m');
var dateSortie = new Date('2020-12-01T00:00:00');

let interval = setInterval(function() {
    let now = new Date()
    let time = (dateSortie - now);
    let heures = 23 - now.getHours();
    let minutes = 59 - now.getMinutes();
    let secondes = 59 - now.getSeconds();
    let milis = 999 - now.getMilliseconds();
    ms.innerHTML = heures + ':' + minutes + "'" + secondes + "''";
    m.innerHTML = milis;

    if(time < 0) {
        clearInterval(interval);
        timer.innerHTML = 'Libres.';
        document.body.classList = 'gradient';
        timer.style.left = "50%";
    }
}, 10);
