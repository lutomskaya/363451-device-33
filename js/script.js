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


