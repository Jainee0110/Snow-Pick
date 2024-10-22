import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'animate.css';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
import 'swiper/css/navigation'; // module css


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


  var latestSwiper = new Swiper(".latest-swiper", {
      slidesPerView: "auto",
      spaceBetween: 24,
  });

  var teamSwiper = new Swiper(".team-swiper", {
    slidesPerView: 1,
    breakpoints: {
      770: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      }
    },
    // 危險的東西
    // hashNavigation: {
    //   watchState: true,
    // },
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".team-button-next",
      prevEl: ".team-button-prev",
    },
    pagination: {
      el: ".team-swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3500,
    },
  
  });


const showOnPx = 800;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
});

const goToTop = () => {
  document.body.scrollIntoView();
};

backToTopButton.addEventListener("click", goToTop);




const like = document.getElementsByClassName('heart');
for (var i = 0; i < like.length; i++) {
    like[i].addEventListener('click', function(){
        this.classList.toggle('red');
        this.classList.toggle('bi-suit-heart');
        this.classList.toggle('bi-suit-heart-fill');
    })
}