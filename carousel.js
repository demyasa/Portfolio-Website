// Carousel

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');
const dotContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length;

// Function to create dots
const drawDots = function() {
    slides.forEach(function (slide, i) {
        dotContainer.insertAdjacentHTML('beforeend', `<button class="dots_dot" data-slide="${i}"></button>`);
    });
};

// Draw dots
drawDots();

// Function to shift slides
const goToSlide = function(slide) {
    console.log('Going to slide: ', slide);
    console.log('Type of slide: ', typeof(slide));
    slides.forEach( 
        (s , i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
}

// Slide starting position
goToSlide(0);

// Function for next slide
const nextSlide = function() {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide += 1;
    }
    goToSlide(curSlide)
};

// Function for previous slide
const prevSlide = function() {
    if (curSlide === 0) {
        curSlide = maxSlide -1;
    } else {
        curSlide -= 1;
    }
    goToSlide(curSlide)
};

// Add event listeners
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

dotContainer.addEventListener('click', function(e) {
    console.log(e.target.classList);
    if (e.target.classList.contains('dots_dot')) {
        curSlide = +e.target.dataset.slide;
        console.log("Ayo", curSlide);
        goToSlide(curSlide);
    }
});