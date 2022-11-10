const sendForm = ({ formId, someElement = [] }) => {
    const form = document.getElementById(formId);
    const preloader = document.createElement('div');
    const statusBlock = document.createElement('h3');
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется!';


    preloader.classList.add('preloader');
    preloader.insertAdjacentHTML("beforeend", `
        <div class="cssload-thecube">
	        <div class="cssload-cube cssload-c1"></div>
	        <div class="cssload-cube cssload-c2"></div>
	        <div class="cssload-cube cssload-c4"></div>
	        <div class="cssload-cube cssload-c3"></div>
        </div>
    `);
    preloader.style.display = "none";

    const validate = (list) => {
        let success = true;

        return success;
    };
    const clearStatusBlock = () => statusBlock.textContent = '';

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const totalValue = document.getElementById('total').textContent;
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        clearStatusBlock();
        preloader.style.display = "block";

        formData.forEach((value, key) => {
            if (value) {
                formBody[key] = value;
            }

        });

        if (totalValue !== '0') {
            formBody.total = totalValue;
        }

        someElement.forEach(elem => {
            const element = document.getElementById(elem.id);
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    preloader.style.display = "none";
                    formElements.forEach(input => input.value = '');
                    statusBlock.textContent = successText;
                    setTimeout(clearStatusBlock, 5000);
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                    setTimeout(clearStatusBlock, 5000);
                });
        } else {
            alert('Данные не валидны!!!');
        }
    };

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста!');
        }
        form.append(preloader);
        form.append(statusBlock);

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);

    }
};

export default sendForm;