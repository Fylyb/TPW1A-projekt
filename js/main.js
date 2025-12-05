(function(){
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  function setMenu(open){
    if(!menuToggle || !mobileMenu || !menuIcon) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    mobileMenu.classList.toggle('is-open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    menuIcon.innerHTML = open
      ? '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M6 18L18 6" stroke-linecap="round"/></svg>'
      : '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round"/></svg>';
  }

  if(menuToggle) {
    menuToggle.addEventListener('click', function(){
      console.log('click');
    });
  };

  if(menuToggle) menuToggle.addEventListener('click', ()=> setMenu(menuToggle.getAttribute('aria-expanded') === 'true' ? false : true));
  window.addEventListener('resize', ()=> { if(window.innerWidth >= 768) setMenu(false); });

  window.scrollToSection = function(id){
    const el = document.getElementById(id);
    if(!el) return;
    el.scrollIntoView({behavior:'smooth',block:'start'});
    if(menuToggle && menuToggle.getAttribute('aria-expanded') === 'true') setMenu(false);
  };

  window.addEventListener('load', ()=> {
    document.querySelectorAll('image-with-fallback').forEach(c => c.init && c.init());
  });

  const heroBg = document.getElementById('heroBg');
  if(heroBg){
    const url = heroBg.style.backgroundImage.slice(5, -2);
    const img = new Image();
    img.src = url;
    img.onload = ()=> heroBg.style.backgroundImage = 'url("' + img.src + '")';
  }
})();
