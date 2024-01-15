function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = (hours % 12 || 12).toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);

function swap(){
    let cContainerStyle = document.getElementById("clock-container").style;
    let sContainerStyle = document.getElementById("stopwatch-container").style;
    let swapBtn = document.getElementById("swapBtn");

    console.log(sContainerStyle.display);
    console.log(cContainerStyle.display);
    if(swapBtn.textContent == "Stopwatch"){
        swapBtn.textContent = "Local Clock";
        cContainerStyle.display = "none";
        sContainerStyle.display = "flex";
    }
    else if(swapBtn.textContent = "Local Clock"){
        swapBtn.textContent = "Stopwatch";
        cContainerStyle.display = "flex";
        sContainerStyle.display = "none";
    }
    else console.error("Exception in swap()");

}

const display = document.getElementById("display");
const ssBtn = document.getElementById("ssBtn");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function ss(){
    if(!isRunning){
        ssBtn.textContent = "Stop";
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateStopwatch, 10);
        isRunning = true;
    }
    else{
        stop();
    }
}
function stop(){
    ssBtn.textContent = "Start";
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
}
function reset(){
    ssBtn.textContent = "Start";
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}
function updateStopwatch(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(2, "0");
    let minutes = String(Math.floor(elapsedTime / (1000 * 60) % 60)).padStart(2, "0");
    let seconds = String(Math.floor(elapsedTime / (1000) % 60)).padStart(2,"0");
    let milliseconds = String(Math.floor(elapsedTime % 1000 / 10)).padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}