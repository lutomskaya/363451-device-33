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