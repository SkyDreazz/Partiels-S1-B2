document.addEventListener("DOMContentLoaded", function() {
    function initializeCarousel(carouselContainer) {
        let currentSlide = 0;
        const slides = carouselContainer.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;
        
        const indicatorsContainer = carouselContainer.querySelector('.indicators');
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('span');
            indicator.classList.add('indicator');
            indicator.dataset.index = i;
            indicatorsContainer.appendChild(indicator);
        }

        function updateSlide() {
            const offset = -currentSlide * 100;
            carouselContainer.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

            const indicators = indicatorsContainer.querySelectorAll('.indicator');
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlide();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlide();
        }

        carouselContainer.querySelector('.next').addEventListener('click', nextSlide);
        carouselContainer.querySelector('.prev').addEventListener('click', prevSlide);

        const indicators = indicatorsContainer.querySelectorAll('.indicator');
        indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                currentSlide = parseInt(indicator.dataset.index, 10);
                updateSlide();
            });
        });
    }

    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(initializeCarousel);
});
