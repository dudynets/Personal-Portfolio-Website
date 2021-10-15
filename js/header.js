const headerEl = document.getElementById("header");
const sticky = headerEl.offsetTop;

window.addEventListener("scroll", function (event) {
  if (
    document.documentElement.scrollTop + window.innerHeight >=
    document.documentElement.offsetHeight
  ) {
    headerEl.classList.remove("header-fixed");
  } else if (window.pageYOffset > sticky) {
    headerEl.classList.add("header-fixed");
  } else {
    headerEl.classList.remove("header-fixed");
  }
});
