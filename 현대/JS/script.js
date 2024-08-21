// ScrollGiveClass 플러그인 호출
var sgc1 = new ScrollGiveClass(".fix",{
  baseline:100
});


const swiper1 = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidePerView: 1,
  spaceBetween: 10,
  centeredSlides:true,
  observer: true,
  observerParents: true,
 loopAdditionalSlides: 1,
  autoplay:{
    delay: 4000,
    disalbeOnInteraction: false,
  },

  pagination:{
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});