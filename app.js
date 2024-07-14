let timerInterval;

function play1(){
    let sec = 0;
    let min = 0;
    const timerElement = document.getElementById('timer');
    timerInterval = setInterval (()=>{
        sec++; 
        if (sec === 60) { 
            sec = 0;
            min++;
        }
        let formatSec = sec < 10 ? '0' + sec : sec;
        let formatMin = min < 10 ? '0' + min : min;
        timerElement.innerHTML = formatMin + ':' + formatSec;

    },1000)
}
function pause() {
    clearInterval(timerInterval);
}

