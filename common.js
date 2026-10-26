$(document).ready(function () {
  const slickSlider = $('.slider__wrap');
  const progressBar = $('.slider__progress');
  const slidesCount = $('.slider__slide').length;

  progressBar.css('background-size', 100 / slidesCount + '% 100%').attr('aria-valuenow', '100%');

  slickSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    let calc = (Number(nextSlide + 1) / Number(slick.slideCount)) * 100;
    progressBar.css('background-size', calc + '% 100%').attr('aria-valuenow', '100%');
  });

  slickSlider.slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    infinite: false,

    dots: true,
    customPaging: function (slider, i) {
      return i + 1 + '/' + slider.slideCount;
    },
  });
});

const tabsBox = document.querySelectorAll('.tabs');

tabsBox.forEach((tabContainer) => {
  const allTabs = tabContainer.querySelectorAll('.tab');

  let isDragging = false;

  allTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      if (tabContainer.querySelector('.active')) {
        tabContainer.querySelector('.active').classList.remove('active');
      }
      tab.classList.add('active');
    });
  });

  const dragging = (e) => {
    if (!isDragging) return;
    tabContainer.classList.add('dragging');
    tabContainer.scrollLeft -= e.movementX;
  };
  const dragStop = () => {
    isDragging = false;
    tabContainer.classList.remove('dragging');
  };
  tabContainer.addEventListener('mousedown', () => (isDragging = true));
  tabContainer.addEventListener('mousemove', dragging);
  document.addEventListener('mouseup', dragStop);
});

// Toggle size buttons
const buttonContainer = document.querySelector('.options__size-list');
const sizeButtons = document.querySelectorAll('.size');

sizeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    buttonContainer.querySelector('.size--active').classList.remove('size--active');
    button.classList.add('size--active');
  });
});

//Favorites

const favorite = document.querySelector('.slider__like');
const favoriteButton = favorite.querySelector('.slider__likeImg');

favorite.addEventListener('click', () => {
  if (favoriteButton.src.includes('assets/icon-like-active.svg')) {
    favoriteButton.src = 'assets/icon-like.svg';
  } else {
    favoriteButton.src = 'assets/icon-like-active.svg';
  }
});

//Swatches
const swatchContainer = document.querySelector('.options__swatches');
const swatches = document.querySelectorAll('.swatch');

swatches.forEach((button) => {
  button.addEventListener('click', () => {
    swatchContainer.querySelector('.swatch--active').classList.remove('swatch--active');
    button.classList.add('swatch--active');
  });
});
