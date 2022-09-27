const videoBackgroundEl = document.getElementById('video-background');
const videoBackgroundToggleEl = document.getElementById('video-background-toggle');
const wavingHandEl = document.getElementById('waving-hand');
const raisedHandEl = document.getElementById('raised-hand');

let isPlaying = true;
videoBackgroundToggleEl.addEventListener('click', toggle);

function toggle() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    videoBackgroundEl.play();
    wavingHandEl.classList.remove('hidden');
    raisedHandEl.classList.add('hidden');
  } else {
    videoBackgroundEl.pause();
    wavingHandEl.classList.add('hidden');
    raisedHandEl.classList.remove('hidden');
  }
}
