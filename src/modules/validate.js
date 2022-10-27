const validate = () => {
    const calcBlock = document.querySelector('.calc-block');
    const calcSquareInput = calcBlock.querySelector('.calc-square');
    const calcCountInput = calcBlock.querySelector('.calc-count');
    const calcDayInput = calcBlock.querySelector('.calc-day');
    const calcInputs = [calcSquareInput, calcCountInput, calcDayInput];

    const nameInput1 = document.getElementById('form1-name');
    const nameInput2 = document.getElementById('form2-name');
    const nameInput3 = document.getElementById('form3-name');
    const nameInputs = [nameInput1, nameInput2, nameInput3];

    const mailInput1 = document.getElementById('form1-email');
    const mailInput2 = document.getElementById('form2-email');
    const mailInput3 = document.getElementById('form3-email');
    const mailInputs = [mailInput1, mailInput2, mailInput3];

    const telInput1 = document.getElementById('form1-phone');
    const telInput2 = document.getElementById('form2-phone');
    const telInput3 = document.getElementById('form3-phone');
    const telInputs = [telInput1, telInput2, telInput3];

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