const validate = () => {
    const calcBlock = document.querySelector('.calc-block');
    const calcSquareInput = calcBlock.querySelector('.calc-square');
    const calcCountInput = calcBlock.querySelector('.calc-count');
    const calcDayInput = calcBlock.querySelector('.calc-day');
    const calcInputs = [calcSquareInput, calcCountInput, calcDayInput];

    const nameInputs = document.querySelectorAll('.form-name');

    const mailInputs = document.querySelectorAll('.form-email');

    const telInputs = document.querySelectorAll('.form-phone');

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    calcInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/, "");
        });
    });

    nameInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яё -]/i, "");
        });
    });

    nameInputs.forEach(input => {
        input.addEventListener('blur', (e) => {
            const result = [];
            let nameList;
            e.target.value = e.target.value.replace(/^[\s\-]+|[\s\-]+$/g, '')
                .replace(/\s{2,}/g, ' ').replace(/\-{2,}/g, '-');

            nameList = e.target.value.match(/[а-яё\-]+/gi);
            if (nameList) {
                nameList.forEach(name => {
                    if (/\-+/.test(name)) {
                        let res = [];
                        let subNames = name.match(/[а-яё]+/gi);
                        subNames.forEach(n => res.push(capitalizeFirstLetter(n)));
                        result.push(res.join('-'));
                    } else {
                        result.push(capitalizeFirstLetter(name));
                    }
                });
            }

            e.target.value = result.join(' ');
        });
    });

    mailInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-z@\-_.!~*']/i, "");
        });
    });

    telInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d\(\)\-]/, "");
        });
    });
};


export default validate;