const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //El that you spy if it's shown or not.
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show') // Will be activated if El is shown at 0.8 area.
    .addTo(new ScrollMagic.Controller());
});