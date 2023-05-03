// 1. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'u3ybWiEUaUU',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'u3ybWiEUaUU'
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      }
    }
  });
}


// RANDOM NUM GENERATOR FUNCTION
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// FLOATING ANIMATION
function floatingObject(selector, delay, size) {
  // gsap.to(el, continue_time, options)
  gsap.to(
    selector,         // selector
    random(1.5, 2.5), // animation continue time
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);