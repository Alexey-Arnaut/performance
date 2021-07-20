function showSvg() {
    const points = document.querySelectorAll('.offer__slider-point');
    const svgItems = document.querySelectorAll('.offer__slider-svg');

    points.forEach(point => {

        point.addEventListener('click', () => {
            let pointId = point.getAttribute('data-point');
            let currentSvg = document.querySelector(pointId);

            svgItems.forEach(svgItem => {
                svgItem.classList.remove('offer__slider-svg--active');
            });

            currentSvg.classList.add('offer__slider-svg--active');
        });
    });
};

function sliderOffer() {
    const SliderDots = document.querySelectorAll('.offer__slider-dot');
    const sliderLine = document.querySelector('.offer__slider-line');

    SliderDots.forEach(SliderDot => {
        SliderDot.addEventListener('click', () => {
            let slideId = SliderDot.getAttribute('data-slide');
            let currentItem = document.querySelector(slideId);

            SliderDots.forEach(SliderDot => {
                SliderDot.classList.remove('offer__slider-dot--active');
            })

            SliderDot.classList.add('offer__slider-dot--active');

            sliderLine.style.left = -currentItem.offsetLeft + 'px';
        });
    });
};

function sliderResources() {
    const buttonPrev = document.querySelector('.arrow-prev');
    const buttonNext = document.querySelector('.arrow-next');
    const sliderLine = document.querySelector('.resources__slider-line');
    const sliderDots = document.querySelectorAll('.resources__slider-dot');
    let itemWidth = document.querySelector('.resources__slider-line').offsetWidth;
    let count = 0;

    function activeDot() {
        for (let SliderDot of sliderDots) {
            SliderDot.classList.remove('resources__slider-dot--active')
        }
        sliderDots[count].classList.add('resources__slider-dot--active')
    }

    function currentSlide() {
        sliderLine.style.left = -count * itemWidth + "px";
    }

    buttonPrev.addEventListener('click', () => {

        --count;

        if (count < 0) {
            count = 2
        }

        activeDot();
        currentSlide()
    });

    buttonNext.addEventListener('click', () => {
        ++count;

        if (count > 2) {
            count = 0
        }

        activeDot();
        currentSlide()
    });

    sliderDots.forEach(SliderDot => {
        SliderDot.addEventListener('click', event => {
            let slideId = SliderDot.getAttribute('data-sliders');
            let currentItem = document.querySelector(slideId);

            if (sliderDots[0] == event.currentTarget) {
                count = 0;
            } else if (sliderDots[1] == event.currentTarget) {
                count = 1;
            } else if (sliderDots[2] == event.currentTarget) {
                count = 2;
            }

            sliderDots.forEach(SliderDot => {
                SliderDot.classList.remove('resources__slider-dot--active');
            });
            SliderDot.classList.add('resources__slider-dot--active');

            sliderLine.style.left = -(currentItem.offsetLeft - 50) + 'px';
        });
    });
};

function sliderTestimonials() {
    const SliderDots = document.querySelectorAll('.testimonials__slider-dot');
    const sliderItems = document.querySelectorAll('.testimonials__slider-item');
    const sliderLine = document.querySelector('.testimonials__slider-line');

    SliderDots.forEach(SliderDot => {
        SliderDot.addEventListener('click', () => {
            let slideId = SliderDot.getAttribute('data-slider');
            let currentItem = document.querySelector(slideId);


            SliderDots.forEach(SliderDot => {
                SliderDot.classList.remove('testimonials__slider-dot--active');
            });

            sliderItems.forEach(sliderItem => {
                sliderItem.classList.remove('testimonials__slider-item--active');
            });

            SliderDot.classList.add('testimonials__slider-dot--active');
            currentItem.classList.add('testimonials__slider-item--active');

            sliderLine.style.left = -currentItem.offsetLeft + 'px';

        });
    });
};

function navigation() {
    const links = document.querySelectorAll('.link');
    const header = document.querySelector('.header');
    const menu = document.querySelector('.header__menu');
    const body = document.querySelector('body');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const href = link.getAttribute('href');

            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            menu.classList.remove('header__menu--active');
            header.classList.remove('header--active');
            body.style.overflow = 'visible';
        });
    });

    window.onscroll = () => {
        if (pageYOffset > 200) {
            header.classList.add('header--sticky');
        } else {
            header.classList.remove('header--sticky');
        };
    };

    menu.addEventListener('click', () => {
        menu.classList.toggle('header__menu--active');
        header.classList.toggle('header--active');
        
        if(menu.classList.contains('header__menu--active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'visible';
        };
    });
};

function accordion() {

};

showSvg();
navigation();
sliderOffer();
sliderResources();
sliderTestimonials();