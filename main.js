import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'animate.css';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';


var swiper = new Swiper(".mySwiper", {
    autoplay:true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable :true,
    },
  });