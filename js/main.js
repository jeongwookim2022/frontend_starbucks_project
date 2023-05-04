// SEARCH ICON
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', 'Search');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// LOGO & To-Top Button
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector('#to-top');

// (1) _.throttle(function() {}, time ms);
// (2) gsap.to(el, time, option);
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    // 1. Hide badges
    // badgeEl.style.display= 'none';
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    // 1-1. Show To-Top Button.
    gsap.to(toTopEl, 0.2, {
      x: 0
    });
  } else {
    // 2. Show badges
    // badgeEl.style.display= 'block';
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    // 2-2. Hide To-Top Button.
    gsap.to(toTopEl, 0.2, {
      x: 100
    });
  }
}, 300));
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});


// VISUAL SWIPER
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1)*0.7,
    opacity: 1
  });
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 5000
  // }
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

// AWARDS SWIPER
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});




// PROMOTION TOGGLE
const promotionEl = document.querySelector('.promotion ');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});

// FOOTER YEAR AUTO
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();