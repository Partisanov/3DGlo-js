const slider = (sliderBlockClass, slideClass, dotsBlockClass,
    slideActiveClass = 'slide-active', dotActiveClass = 'dot-active') => {

    const sliderBlock = document.querySelector(`.${sliderBlockClass}`);
    const slides = document.querySelectorAll(`.${slideClass}`);
    const dotsWrap = document.querySelector(`.${dotsBlockClass}`);

    if (!sliderBlock || (slides.length === 0) || !dotsWrap) {
        return;
    } else {
        const timeInterval = 2000;
        let dots;
        let currentSlide = 0;
        let interval;

        const addDots = () => {
            for (let i = 0; i < slides.length; i++) {
                dotsWrap.insertAdjacentHTML('beforeend', `<li class="dot"></li>`);
            }
            dots = document.querySelectorAll('.dot');
            dots[0].classList.add(dotActiveClass);
        };

        const prevSlide = (elems, index, strClass) => {
            elems[index].classList.remove(strClass);
        };

        const nextSlide = (elems, index, strClass) => {
            elems[index].classList.add(strClass);
        };

        const autoSlide = () => {
            prevSlide(slides, currentSlide, slideActiveClass);
            prevSlide(dots, currentSlide, dotActiveClass);
            currentSlide++;

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }

            nextSlide(slides, currentSlide, slideActiveClass);
            nextSlide(dots, currentSlide, dotActiveClass);
        };

        const startSlide = (timer = 1500) => {
            interval = setInterval(autoSlide, timer);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        sliderBlock.addEventListener('click', (e) => {
            e.preventDefault();

            if (!e.target.matches('.dot, .portfolio-btn')) {
                return;
            }

            prevSlide(slides, currentSlide, slideActiveClass);
            prevSlide(dots, currentSlide, dotActiveClass);

            if (e.target.matches('#arrow-right')) {
                currentSlide++;
            } else if (e.target.matches('#arrow-left')) {
                currentSlide--;
            } else if (e.target.classList.contains('dot')) {
                dots.forEach((dot, index) => {
                    if (e.target === dot) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }

            nextSlide(slides, currentSlide, slideActiveClass);
            nextSlide(dots, currentSlide, dotActiveClass);

        });

        sliderBlock.addEventListener('mouseenter', e => {
            if (e.target.matches('.dot, .portfolio-btn')) {
                stopSlide();
            }
        }, true);

        sliderBlock.addEventListener('mouseleave', e => {
            if (e.target.matches('.dot, .portfolio-btn')) {
                startSlide(timeInterval);
            }
        }, true);

        addDots();
        startSlide(timeInterval);

    }
};

export default slider;