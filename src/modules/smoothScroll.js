const smoothScroll = () => {
    const links = [...document.querySelectorAll('a')].filter(item => /^#.+/.test(item.getAttribute('href')));

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const id = link.getAttribute('href').substring(1);
            const section = document.getElementById(id);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
        });
    });
};
export default smoothScroll;