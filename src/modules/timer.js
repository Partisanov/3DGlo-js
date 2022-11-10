'use strict';
const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days');
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    let idInterval;

    const formatNumber = (num) => {
        return (num < 10) ? '0' + num : num;
    };

    const declOfNum = (number, words) => {
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 :
            [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
    };

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;

        if (timeRemaining > 0) {
            days = Math.floor(timeRemaining / 60 / 60 / 24);
            hours = Math.floor((timeRemaining / 60 / 60) % 24);
            minutes = Math.floor((timeRemaining / 60) % 60);
            seconds = Math.floor(timeRemaining % 60);
        }

        return { timeRemaining, days, hours, minutes, seconds };
    };

    const updateClock = () => {
        const getTime = getTimeRemaining();

        timerDays.textContent = (getTime.days > 0) ?
            (`${getTime.days} ${declOfNum(getTime.days, ['день', 'дня', 'дней'])}`) : '';
        timerHours.textContent = formatNumber(getTime.hours);
        timerMinutes.textContent = formatNumber(getTime.minutes);
        timerSeconds.textContent = formatNumber(getTime.seconds);

        if (getTime.timeRemaining <= 0) {
            clearInterval(idInterval);
        }
    };
    updateClock();
    idInterval = setInterval(updateClock, 500);

};
export default timer;