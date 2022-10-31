const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const popupContent = modal.querySelector('.popup-content');
    let idInterval;
    let count = -30;

    const animatePopup = () => {
        count++;

        idInterval = requestAnimationFrame(animatePopup);
        if (count < 4) {
            popupContent.style.top = `${count * 20}px`;
        } else {
            cancelAnimationFrame(idInterval);
            count = -30;
        }
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            if (screen.width > 768) {
                requestAnimationFrame(animatePopup);
            }
        });
    });


    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }

    });

};

export default modal;