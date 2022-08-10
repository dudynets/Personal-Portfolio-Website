const videoBackgroundEl = document.getElementById('video-background');
const videoBackgroundToggleEl = document.getElementById(
  'video-background-toggle'
);

let isPlaying = true;
videoBackgroundToggleEl.addEventListener('click', toggle);

function toggle() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    videoBackgroundEl.play();
    videoBackgroundToggleEl.classList.remove('ec-raised-hand');
    videoBackgroundToggleEl.classList.add('ec-wave');
  } else {
    videoBackgroundEl.pause();
    videoBackgroundToggleEl.classList.remove('ec-wave');
    videoBackgroundToggleEl.classList.add('ec-raised-hand');
  }
}
