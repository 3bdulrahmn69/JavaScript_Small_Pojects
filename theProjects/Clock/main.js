let dayD = document.querySelector(".day");
let timeT = document.querySelector(".time");
let minutesM = document.querySelector(".minutes");
let sceS = document.querySelector(".sce");
let mmM = document.querySelector(".mm");

const arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]


// var x = y !== undefined ? y : 1;
function display() {
    const now = new Date();
    const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const sec = now.getSeconds();
    let displayHours = hours > 12 ? hours - 12 : hours;

    dayD.textContent = `${arr[day]}\xa0 `;
    timeT.textContent = `${displayHours < 10 ? "0" + displayHours : displayHours}:`;
    minutesM.textContent = `${minutes < 10 ? "0" + minutes : minutes}:`;
    sceS.textContent = `${sec < 10 ? "0" + sec : sec}`;
    mmM.textContent = `${hours >= 12 ? "PM" : "AM"}`;
};

display();

setInterval(display, 1000);