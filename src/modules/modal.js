const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const popupContent = modal.querySelector('.popup-content');
    let idInterval;
    let count = -50;

    const animatePopup = () => {
        count++;

        idInterval = requestAnimationFrame(animatePopup);
        if (count < 10) {
            popupContent.style.top = `${count * 5}px`;
        } else {
            cancelAnimationFrame(idInterval);
            count = -50;
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
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

};

export default modal;