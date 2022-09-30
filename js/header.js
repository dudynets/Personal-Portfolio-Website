const headerEl = document.getElementById('header');
const sticky = headerEl.offsetTop;

window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    headerEl.classList.remove('header-fixed');
  } else if (window.scrollY > sticky) {
    headerEl.classList.add('header-fixed');
  } else {
    headerEl.classList.remove('header-fixed');
  }
});
