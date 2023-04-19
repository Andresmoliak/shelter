$(document).ready(function(){
    $('.pets__slider').slick({
      prevArrow: `<button type="button"><img src="../svg/Arrow-back.svg" alt="arrow-to-back"></button>`,
      nextArrow: `<button type="button"><img src="../svg/arrow-next.svg" alt="arrow-to-next"></button>`,
      slidesToShow: 3,
      slidesToScroll: 2,
    });
  });

//modal-window
const modalBack = document.querySelector('.pets__modal__back');
const modalWindow = document.querySelector('.pets__modal__content')
const buttons = Array.from(document.querySelectorAll('.card__link'))
const buttonClose = document.querySelector('.modal__close')
const body = document.querySelector('body')
const CloseVariants = [modalBack, buttonClose]

buttons.forEach((el) => {
el.addEventListener('click', () => {
  modalBack.classList.add('active')
  body.classList.add('closed')
  modalWindow.classList.add('active')
})
})

CloseVariants.forEach((el) => {
el.addEventListener('click', () => {
  modalBack.classList.remove('active')
  body.classList.remove('closed')
  modalWindow.classList.remove('active')
})
})

