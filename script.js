const  clock = document.querySelector('#time'),
    progress = document.querySelector('#progress');

let hour, minute, second;
let clockType = 1;
const THE_NUMBER_OF_TYPES = 4;

function getTime(){
    date = new Date;
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
}

function displayTime() {
    getTime();
    if (clockType == 1){
        clock.innerHTML = `${23-hour > 9 ? 23-hour : `0${23-hour}`}
        : ${59-minute > 9 ? 59-minute : `0${59-minute}`}
        : ${59-second > 9 ? 59-second : `0${59-second}`}`

    } else if (clockType == 2) {
        clock.innerHTML = `${24*60*60 - hour*60*60 - minute*60 - second}s`

    } else if (clockType == 3) {
        clock.innerHTML = `${24*60 - hour*60 - minute}min`

    } else if (clockType == 4) {
        clock.innerHTML = `${24 - hour}h`

    }

    progress.value = (hour*60*60 + minute*60 + second) / (24*60*60)
}

setInterval(displayTime, 1000);


clock.addEventListener('click', () => {
    if (clockType < THE_NUMBER_OF_TYPES)
    clockType += 1;
    else
    clockType = 1;

    displayTime();
})

displayTime();