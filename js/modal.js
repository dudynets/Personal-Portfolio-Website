const debateReviewsToolCard = document.getElementById(
  "debate-reviews-tool-card"
);
const overflow = document.getElementById("modal-overlay");
const video = document.getElementById("debate-reviews-tool-video");

debateReviewsToolCard.addEventListener("click", () => {
  overflow.style.display = "flex";
  video.currentTime = 0;
  video.play();
});

overflow.addEventListener("click", () => {
  video.pause();
  overflow.style.display = "none";
});
