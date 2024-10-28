const sec = document.querySelector('.seconds')
const min = document.querySelector('.minutes')
const hour = document.querySelector('.hours')
const startBtn = document.querySelector('.startBtn');
const pauseBtn = document.querySelector('.pauseBtn');
const resetBtn = document.querySelector('.resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTime(){
    seconds++;
    if (seconds === 60){
        minutes++;
        seconds = 0;
    }
    if (minutes === 60){
        hours++;
        minutes = 0;
    }
    sec.innerText = seconds;
    min.innerText = minutes;
    hour.innerText = hours;
    
};

startBtn.addEventListener('click', () => {
    interval = setInterval(updateTime, 1000);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
});

pauseBtn.addEventListener('click', () => {
    clearInterval(interval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = false;
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    sec.innerText = 0;

    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
});
