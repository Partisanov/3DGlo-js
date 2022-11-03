import { animate, debounce } from "./helpers";

const calc = (price = 100) => {
    const calckBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');

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
        const startNum = +total.textContent;
        const endNum = countCalc();
        const increment = (startNum < endNum) ? 1 : -1;
        const range = Math.abs(endNum - startNum);

        if (!endNum) {
            return;
        }
        if (startNum !== endNum) {
            animate({
                duration: 7000,

                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    total.textContent = `${startNum + increment * Math.floor(progress * range)}`;
                }
            });
        }
    }, 1000));
};

export default calc;