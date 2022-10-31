'use strict';
const menu = () => {
    const menu = document.querySelector('menu');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    document.addEventListener('click', (e) => {
        if (e.target.closest('.menu') || e.target.matches('menu>a.close-btn') || e.target.matches('menu>ul>li>a')) {
            handleMenu();
        } else if (menu.classList.contains('active-menu') && !e.target.closest('menu')) {
            handleMenu();
        }
    });

};
export default menu;
