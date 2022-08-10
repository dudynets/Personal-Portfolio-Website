const debateReviewsToolCard = document.getElementById(
  'debate-reviews-tool-card'
);
const overflow = document.getElementById('modal-overlay');
const closeButton = document.getElementById('modal-close');
const video = document.getElementById('debate-reviews-tool-video');
const debateReviewsToolModalDescriptionYear = document.getElementById('debateReviewsToolModalDescriptionYear');
debateReviewsToolModalDescriptionYear.innerText = new Date().getFullYear().toString();

debateReviewsToolCard.addEventListener('click', () => {
  overflow.style.display = 'flex';
  video.currentTime = 0;
  video.play();
});

closeButton.addEventListener('click', () => {
  video.pause();
  overflow.style.display = 'none';
});

