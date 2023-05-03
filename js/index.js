// $(document).ready(function(){
    $('.pets__slider').slick({
      prevArrow: `<button type="button"><img src="./svg/Arrow-back.svg" alt="arrow-to-back"></button>`,
      nextArrow: `<button type="button"><img src="./svg/arrow-next.svg" alt="arrow-to-next"></button>`,
      slidesToShow: 3,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1280, 
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 766, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });



//modal-window
const modalBack = document.querySelector('.pets__modal__back');
const modalWindow = document.querySelector('.pets__modal__content')
const buttonsMain = Array.from(document.querySelectorAll('.pets__slider .card__link'))
const buttonsPets = Array.from(document.querySelectorAll('.shop__slider .card__link'))
console.log(buttonsPets)
console.log(buttonsMain)
const buttonClose = document.querySelector('.modal__close')
const body = document.querySelector('body')
const CloseVariants = [modalBack, buttonClose]
const addresses = [document.querySelector('.footer__address__contacts'), document.querySelector('.footer__address__location')]
const titles = [document.querySelector('.footer__block__contacts h2'), document.querySelector('.footer__block__location h2')]

const names = Array.from(document.querySelectorAll('.modal__content__info>h2'))
console.log(names)
const subtitles = Array.from(document.querySelectorAll('.modal__content__info h3'))
const info = Array.from(document.querySelectorAll('.modal__content__info p'))
const images = Array.from(document.querySelectorAll('.modal__window__image'))

const burgerBack = document.querySelector('.nav')
const burgerMenu = document.querySelector('.nav__wrapper')
const burgerButtonOpen = document.querySelector('.outside')
const burgerButtonClose = document.querySelector('.inner')
const burger = [burgerBack, burgerMenu]
const burgerButtons = [burgerButtonOpen, burgerButtonClose]

import {pets} from "./pets.js";

// function modal () { не доделано
//   if(buttonsMain.length > 0 || buttonsPets.length > 0){
//        if (buttonsMain.length > 0){
//         let overflow
//         let index 
//         window.innerWidth >= 1280 ? overflow = 3 : window.innerWidth >= 766 ? overflow = 2 : overflow = 1
//         buttonsMain.forEach((el) => {
//           el.addEventListener('click', () => {
//             index = buttonsMain.indexOf(el) - overflow
//             console.log(names[index])
//             names[index].innerHTML = pets[index].name
//             subtitles[index].innerHTML = pets[index].subtitle
//             info[index].innerHTML = pets[index].info
//             modalBack.classList.add('active')
//             body.classList.add('closed')
//             modalWindow.classList.add('active')
//           })
//         }
//        )
//       }}}
// modal()


// if(CloseVariants[0] !== null) { CloseVariants.forEach((el) => {
// el.addEventListener('click', () => {
//   modalBack.classList.remove('active')
//   body.classList.remove('closed')
//   modalWindow.classList.remove('active')
// })
// })
// }




//accordion
if(titles[0] !== null){
titles.forEach((el) => {
el.addEventListener('click', () => {
  let current = addresses[titles.indexOf(el)]
  addresses.forEach((elem) => {
    if(elem === current){
      elem.classList.toggle('active')
    } else {
      elem.classList.remove('active')
    }
  })
})
})
}

//burger
if(burgerButtons[0] !== null){
burgerButtons.forEach((el) => {
el.addEventListener('click', () => {
  burger.forEach((elem) => {
    elem.classList.toggle('active')
  })
  body.classList.toggle('closed')
})
}
)
}


//pagination
$('.shop__slider').slick({
  prevArrow: `<button class="shop__button prev" type="button"><img src="./svg/shop-arrow.svg" alt="arrow"></button>`,
  nextArrow: `<button class="shop__button next" type="button"><img src="./svg/shop-arrow.svg" alt="arrow"></button>`,
  rows: 2,
  slidesPerRow: 4, 
  dots: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1280, 
      settings: {
        rows: 3,
        slidesPerRow: 2
      }
    },
    {
      breakpoint: 766, 
      settings: {
        rows: 3, 
        slidesPerRow: 1
      }
    }
  ]
})