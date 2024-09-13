document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let index = 0;

    function updateCarousel() {
        const width = carousel.offsetWidth;
        carousel.style.transform = `translateX(-${index * width}px)`;
    }

    nextBtn.addEventListener('click', () => {
        const slides = document.querySelectorAll('.exhibition');
        if (index < slides.length - 1) {
            index++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

});
