let typed = new Typed('.typed', {
  strings: [
    'Angular developer',
    'Ionic developer',
    'JavaScript developer',
    'web developer',
    'mobile developer',
    'WordPress developer',
    'freelancer',
    'UX/UI designer',
  ],
  typeSpeed: 80,
  loop: true,
  backSpeed: 40,
  backDelay: 2000,
});

const typedArticleEl = document.getElementById('typed-article');
const typedEl = document.getElementById('typed');

let previousArticle = 'an';

setInterval(() => {
  if (
    typedEl.innerHTML &&
    (typedEl.innerHTML[0].toLowerCase() === 'a' ||
      typedEl.innerHTML[0].toLowerCase() === 'e' ||
      typedEl.innerHTML[0].toLowerCase() === 'i' ||
      typedEl.innerHTML[0].toLowerCase() === 'o' ||
      typedEl.innerHTML[0].toLowerCase() === 'u')
  ) {
    typedArticleEl.innerHTML = 'an';
    previousArticle = 'an';
  } else {
    typedArticleEl.innerHTML = previousArticle;
    previousArticle = 'a';
  }
}, 100);
