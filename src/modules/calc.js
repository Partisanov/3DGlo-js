const calc = (price = 100) => {
    const calckBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');


    function debounce(func, timeout) {
        return function (args) {
            let previousCall = this.lastCall;
            this.lastCall = Date.now();
            if (previousCall && ((this.lastCall - previousCall) <= timeout)) {
                clearTimeout(this.lastCallTimer);
            }
            this.lastCallTimer = setTimeout(() => func(args), timeout);
        };
    }

    const animateNum = (id, start, end, duration) => {
        const startNum = +start;
        const endNum = +end;
        const obj = document.getElementById(id);
        let interval;
        let current = startNum;
        let step = Math.abs(Math.floor((endNum - startNum) / (duration / 1000)));
        step = (startNum < endNum) ? step : -step;

        interval = setInterval(() => {
            current += step;
            if ((current >= (endNum - step)) && (startNum < end)) {
                current = endNum;
            } else if ((current <= (endNum + step)) && (startNum > endNum)) {
                current = endNum;
            }
            if (current === endNum) {
                clearInterval(interval);
            }
            obj.innerHTML = current;
        }, 100);
    };

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = +calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;


        if (calcCount.value > 1) {
            calcCountValue += calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }
        return totalValue;

    };

    calckBlock.addEventListener('input', debounce(() => {
        const startNumber = total.textContent;
        const endNumber = countCalc();
        if (!endNumber) {
            return;
        }
        if (startNumber !== endNumber) {
            animateNum('total', startNumber, endNumber, 12000);
        }
    }, 1000));
};

export default calc;