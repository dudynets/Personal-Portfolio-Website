const CSS = `<style>.glory-to-ukraine-wrapper{pointer-events:none;display:flex;justify-content:end;z-index:9999;width:100%;position:fixed;bottom:0;right:0;padding:40px;transition:all ease-in-out .4s}.glory-to-ukraine__close-button{pointer-events:all;display:flex;justify-content:center;align-items:center;height:23px;width:31px;position:absolute;z-index:3;border-radius:12px 12px 0 0;margin-top:-20px;padding:0 5px;border:3px solid #0455b1;border-bottom:none;background:#1a1a1a;cursor:pointer}.glory-to-ukraine__close-button svg{margin-bottom:-3px}.glory-to-ukraine{border-radius:12px 0 12px 12px;background-clip:padding-box;border:solid 3px transparent;transform:translateZ(0);box-shadow: 0 0 35px 20px rgb(0,0,0,0.5)}.glory-to-ukraine__container{background:#1a1a1a;border-radius:9px 0 9px 9px;position:relative;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:25px}.glory-to-ukraine:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;margin:-3px;border-radius:inherit;background:linear-gradient(135deg,#f2c901 50%,#0455b1 50%)}.glory-to-ukraine__flag img{height:3.6rem;width:3.6rem;margin-right:25px;margin-bottom:-5px}.glory-to-ukraine__text{color:#fff}.glory-to-ukraine__heading{margin-top:0;margin-bottom:10px;font-size:1em}.glory-to-ukraine__text span{font-size:13px}.glory-to-ukraine__text a{pointer-events:all;text-decoration:underline}.glory-to-ukraine__russian-warship,.glory-to-ukraine__support{font-size:13px}.glory-to-ukraine__russian-warship{margin-top:5px}@media (max-width:575.98px){.glory-to-ukraine-wrapper{padding:15px}.glory-to-ukraine__container{padding:20px}}</style>`;
const HTML = `<div class='glory-to-ukraine-wrapper' data-aos='fade-left' data-aos-anchor-placement="bottom-bottom" data-aos-offset="200" id='gloryToUkraineWrapper'><div class='glory-to-ukraine__close-button' id='closeUkraineModal'><svg xmlns='http://www.w3.org/2000/svg' fill='#ffffff' viewBox='0 0 24 24' width='16px' height='16px'><path d='M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z'/></svg></div><div class='glory-to-ukraine'><div class='glory-to-ukraine__container'><picture class='glory-to-ukraine__flag'><source srcset='https://dudynets.pp.ua/assets/images/webp/flag-ukraine.webp' type='image/webp'/><source srcset='https://dudynets.pp.ua/assets/images/no-webp/flag-ukraine.png' type='image/png'/><img height="3.6rem" width="3.6rem" alt='Glory to Ukraine!' src='https://dudynets.pp.ua/assets/images/no-webp/flag-ukraine.png'/></picture><div class='glory-to-ukraine__text'><h2 class='glory-to-ukraine__heading'>Glory to Ukraine!</h2><div class='glory-to-ukraine__support'><a href='https://link.dudynets.pp.ua/ukraine'>Find out how you can help.</a></div><div class='glory-to-ukraine__russian-warship'><a href='https://wikipedia.org/wiki/Russian_warship,_go_fuck_yourself'>Russian warship, go fuck yourself!</a></div></div></div></div></div>`;
document.body.innerHTML += CSS;
document.body.innerHTML += HTML;

const gloryToUkraineWrapper = document.getElementById('gloryToUkraineWrapper');
const closeUkraineModal = document.getElementById('closeUkraineModal');
closeUkraineModal.addEventListener('click', () => {
  gloryToUkraineWrapper.style.opacity = '0';
  setTimeout(() => {
    gloryToUkraineWrapper.remove();
  }, 400);
});
