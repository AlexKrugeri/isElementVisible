/**
 * fil: audio.js
 * purpose: play audio when the containing div is visible
 **/
window.addEventListener("scroll", function() {

  var mySound = document.getElementById("myaudio"); // select audio id
  var lyd = document.getElementById("lyd");
  console.log("Er div #lyd synlig? " + elFllVsbl(lyd));

  if (elFllVsbl(lyd)) {
    if (!(mySound.curentTime > 0)) {
      mySound.play(); // play audio
    }
  } else {
    mySound.pause();
    mySound.currentTime = 0; // rewind the sound
  }
})

function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}
