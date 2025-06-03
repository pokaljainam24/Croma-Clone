const carousel = document.querySelector('#carouselExample');
const captions = carousel.querySelectorAll('.carousel-item .fade-left');

// Trigger animation on first load
window.addEventListener('load', () => {
    captions[0].classList.add('active');
});

carousel.addEventListener('slide.bs.carousel', (event) => {
    captions.forEach(cap => cap.classList.remove('active'));
});

carousel.addEventListener('slid.bs.carousel', (event) => {
    const nextSlide = carousel.querySelectorAll('.carousel-item')[event.to];
    const nextText = nextSlide.querySelector('.fade-left');
    if (nextText) {
        nextText.classList.add('active');
    }
});
