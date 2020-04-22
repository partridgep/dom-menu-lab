// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];



//Tasks 1
let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList ='flex-ctr';

//Tasks 2
topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList = 'flex-around';

//Tasks 3
for(menuLink of menuLinks) {
    let anchor = document.createElement('a');
    anchor.href = menuLink.href;
    anchor.textContent = menuLink.text;
    topMenuEl.appendChild(anchor) ;
};