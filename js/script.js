var basketLink = document.querySelector('.basket');
var basketModal = document.querySelector('.popover-basket');

basketLink.addEventListener('click', function (event) {
    event.preventDefault();
    basketModal.classList.toggle('modal__show');
});

var navMain = document.querySelector('.main-nav__link');
var catalogLink = document.querySelector('.main-nav__toggle');
var mainNav = document.querySelector('.main-catalog__list');

catalogLink.addEventListener("click", function() {
    if (navMain.classList.contains("main-catalog__closed")) {
      navMain.classList.remove("main-catalog__closed");
      navMain.classList.add("main-catalog__opened");
    } else {
      navMain.classList.add("main-catalog__closed");
      navMain.classList.remove("main-catalog__opened");
    }
  });

  var buttonSlider = document.querySelectorAll('.slider-controls__button');
  var slide = document.querySelectorAll('.slider__item');
  var slidePrv = document.querySelector('.slider__arrow--prev');
  var slideNext = document.querySelector('.slider__arrow--next');

  for (var i = 0; i < buttonSlider.length; ++i) {
    buttonSlider[i].addEventListener('click', function (event) {
      event.preventDefault(event);
          for (var j = 0; j < buttonSlider.length; ++j) {
            buttonSlider[j].classList.remove('slider-controls__button--active');
          }
          for (var h = 0; h < buttonSlider.length; ++h) {
              if (buttonSlider[h] == this) {
                buttonSlider[h].classList.add('slider-controls__button--active');
                  for (var k = 0; k < slide.length; ++k) {
                      slide[k].classList.remove('slider__item--active');
                  }
                  slide[h].classList.add('slider__item--active');
              }
          }
    })
  };


var buttonService = document.querySelectorAll('.service-slider__item');
var serviceSlide = document.querySelectorAll('.delivery-main__item');

for (var i = 0; i < buttonService.length; ++i) {
	buttonService[i].addEventListener('click', function (event) {
		event.preventDefault(event);
        for (var j = 0; j < buttonService.length; ++j) {
          buttonService[j].classList.remove('.service-slider__item--active');
        }
        for (var h = 0; h < buttonService.length; ++h) {
            if (buttonService[h] == this) {
              buttonService[h].classList.add('.service-slider__item--active');
                for (var k = 0; k < serviceSlide.length; ++k) {
                    serviceSlide[k].classList.remove('delivery-main__item--active');
                }
                serviceSlide[h].classList.add('delivery-main__item--active');
            }
        }
	})
};

var link = document.querySelector('.open-modal-link');
var modal = document.querySelector('.modal');
var close = document.querySelector('.modal__close');

link.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.add('modal__show');
});

close.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.remove('modal__show');
});


