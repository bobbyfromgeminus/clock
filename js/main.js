'use strict';

const getCurrentTime = () => {
    const clockBody = document.querySelector('.clock-body');
    const currentDate = new Date();
    const currentLocalTime = currentDate.toLocaleTimeString('hu');
    clockBody.textContent = currentLocalTime;
}

getCurrentTime();
setInterval(getCurrentTime, 1000);