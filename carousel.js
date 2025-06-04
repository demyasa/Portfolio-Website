// Carousel

const slides = document.querySelectorAll('.slide');

const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');

let curSlide = 0;
const maxSlide = slides.length;

// Function to shift slides
const goToSlide = function(slide) {
    slides.forEach( 
        (slide , i) => (slide.style.transform = `translateX(${100 * (i - curSlide)}%)`)
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
}

// Function for previous slide
const prevSlide = function() {
    if (curSlide === 0) {
        curSlide = maxSlide -1;
    } else {
        curSlide -= 1;
    }
    goToSlide(curSlide)
}

// Add event listeners
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);