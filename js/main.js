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


// LOGO
const badgeEl = document.querySelector("header .badges");
// (1) _.throttle(function() {}, time ms);
// (2) gsap.to(el, time, option);
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    // Hide badges
    // badgeEl.style.display= 'none';
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // Show badges
    // badgeEl.style.display= 'block';
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300));

