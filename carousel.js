// Carousel

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');
const dotContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length;

// Functions

// Function to create dots
const drawDots = function() {
    slides.forEach(function (slide, i) {
        dotContainer.insertAdjacentHTML('beforeend', `<button class="dots_dot" data-slide="${i}"></button>`);
    });
};

// Highlight active dot
const highlightDot = function(slide) {
    document.querySelectorAll('.dots_dot').forEach(dot => dot.classList.remove('dot--fill'));

    document.querySelector(`.dots_dot[data-slide="${slide}"]`).classList.add('dot--fill');
}

// Function to shift slides
const goToSlide = function(slide) {
    slides.forEach( 
        (s , i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
}

// Function for next slide
const nextSlide = function() {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide += 1;
    }
    goToSlide(curSlide)
    highlightDot(curSlide)
};

// Function for previous slide
const prevSlide = function() {
    if (curSlide === 0) {
        curSlide = maxSlide -1;
    } else {
        curSlide -= 1;
    }
    goToSlide(curSlide)
    highlightDot(curSlide)
};

// Initialize
const init = function() {
    goToSlide(0);
    drawDots();
    highlightDot(0);
}
init();

// Add event listeners
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

dotContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('dots_dot')) {
        curSlide = +e.target.dataset.slide;
        goToSlide(curSlide);
        highlightDot(curSlide)
    }
});
