// This script will contain 4 different slide shows before every of
// these I will set a comment

//First section containers slide show

const LeftArrow = document.getElementById('leftArrow');
const RightArrow = document.getElementById('rightArrow');

let slidePosition = 0;
const slides = document.getElementsByClassName('Carousel__item');
const totalSlides = slides.length;

RightArrow
  .addEventListener("click", function() {
    moveToNextSlide();
  });
LeftArrow
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('Carousel__item--visible');
    slide.classList.add('Carousel__item--invisible');
  }

  slides[slidePosition].classList.add('Carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}


//Second section houses slide show

const housesLeftArrow = document.getElementById('housesLeftArrow');
const housesRightArrow = document.getElementById('housesRightArrow');

let housesSlidePosition = 0;
const housesSlides = document.getElementsByClassName('housesCarousel__item');
const housesTotalSlides = housesSlides.length;

housesRightArrow
  .addEventListener("click", function() {
    housesMoveToNextSlide();
  });
housesLeftArrow
  .addEventListener("click", function() {
    housesMoveToPrevSlide();
  });

function housesUpdateSlidePosition() {
  for (let slide of housesSlides) {
    slide.classList.remove('housesCarousel__item--visible');
    slide.classList.add('housesCarousel__item--invisible');
  }

  housesSlides[housesSlidePosition].classList.add('housesCarousel__item--visible');
}

function housesMoveToNextSlide() {
  if (housesSlidePosition === housesTotalSlides - 1) {
    housesSlidePosition = 0;
  } else {
    housesSlidePosition++;
  }

  housesUpdateSlidePosition();
}

function housesMoveToPrevSlide() {
  if (housesSlidePosition === 0) {
    housesSlidePosition = housesTotalSlides - 1;
  } else {
    housesSlidePosition--;
  }

  housesUpdateSlidePosition();
}


//Second section containers slide show

const ranksLeftArrow = document.getElementById('ranksLeftArrow');
const ranksRightArrow = document.getElementById('ranksRightArrow');

let ranksSlidePosition = 0;
const ranksSlides = document.getElementsByClassName('ranksCarousel__item');
const ranksTotalSlides = ranksSlides.length;

ranksRightArrow
  .addEventListener("click", function() {
    ranksMoveToNextSlide();
  });
ranksLeftArrow
  .addEventListener("click", function() {
    ranksMoveToPrevSlide();
  });

function ranksUpdateSlidePosition() {
  for (let slide of ranksSlides) {
    slide.classList.remove('ranksCarousel__item--visible');
    slide.classList.add('ranksCarousel__item--invisible');
  }

  ranksSlides[ranksSlidePosition].classList.add('ranksCarousel__item--visible');
}

function ranksMoveToNextSlide() {
  if (ranksSlidePosition === ranksTotalSlides - 1) {
    ranksSlidePosition = 0;
  } else {
    ranksSlidePosition++;
  }

  ranksUpdateSlidePosition();
}

function ranksMoveToPrevSlide() {
  if (ranksSlidePosition === 0) {
    ranksSlidePosition = ranksTotalSlides - 1;
  } else {
    ranksSlidePosition--;
  }

  ranksUpdateSlidePosition();
}


//Third section photos slide show

const windowsLeftArrow = document.getElementById('windowsLeftArrow');
const windowsRightArrow = document.getElementById('windowsRightArrow');

let windowsSlidePosition = 0;
const windowsSlides = document.getElementsByClassName('windowsCarousel__item');
const windowsTotalSlides = windowsSlides.length;

windowsRightArrow
  .addEventListener("click", function() {
    windowsMoveToNextSlide();
  });
windowsLeftArrow
  .addEventListener("click", function() {
    windowsMoveToPrevSlide();
  });

function windowsUpdateSlidePosition() {
  for (let slide of windowsSlides) {
    slide.classList.remove('windowsCarousel__item--visible');
    slide.classList.add('windowsCarousel__item--invisible');
  }

  windowsSlides[windowsSlidePosition].classList.add('windowsCarousel__item--visible');
}

function windowsMoveToNextSlide() {
  if (windowsSlidePosition === windowsTotalSlides - 1) {
    windowsSlidePosition = 0;
  } else {
    windowsSlidePosition++;
  }

  windowsUpdateSlidePosition();
}

function windowsMoveToPrevSlide() {
  if (windowsSlidePosition === 0) {
    windowsSlidePosition = windowsTotalSlides - 1;
  } else {
    windowsSlidePosition--;
  }

  windowsUpdateSlidePosition();
}

