const images = document.querySelectorAll('.imagens img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const bullets = document.querySelectorAll('.bolinha');

let currentIndex = 0;

function updateCarousel(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        bullets[i].classList.remove('active');
        if (i === index) {
            img.classList.add('active');
            bullets[i].classList.add('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel(currentIndex);
});

bullets.forEach(bullet => {
    bullet.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.index);
        updateCarousel(currentIndex);
    });
});