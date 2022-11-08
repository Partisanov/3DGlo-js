const sendForm = ({ formId, someElement = [] }) => {
    const form = document.getElementById(formId);
    const preloader = document.createElement('div');

    preloader.classList.add('preloader');
    preloader.insertAdjacentHTML("beforeend", `
        <div class="cssload-thecube">
	        <div class="cssload-cube cssload-c1"></div>
	        <div class="cssload-cube cssload-c2"></div>
	        <div class="cssload-cube cssload-c4"></div>
	        <div class="cssload-cube cssload-c3"></div>
        </div>
    `);

    const validate = (list) => {
        let success = true;

        return success;
    };

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
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        form.append(preloader);

        formData.forEach((value, key) => {
            formBody[key] = value;
        });

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
                });
        } else {
            alert('Данные не валидны!!!');
        }
    };

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста!');
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);

    }
};

export default sendForm;