const nextbtn = document.querySelector('.next-btn');
const prevbtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const nummverOfSlides = slides.length;
let slideNumber = 0;

//slider next button 
nextbtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber++;

    if (slideNumber > (nummverOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
}

//slider prev button 
prevbtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
}