// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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

//Tasks 4
const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList = 'flex-around';
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

//Tasks 5
const topMenuLinks = topMenuEl.querySelectorAll('a');
let showingSubMenu = false;
topMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== 'A') {return};
  console.log(evt.target.textContent);

  if (evt.target.classList.contains('active')) {
    evt.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return
  };

  for(link of topMenuLinks) {
    link.classList.remove('active');
  };

  evt.target.classList.add('active');

  let subLinks = [];
  for(link of menuLinks) {
    if(evt.target.textContent === link.text) {
      if(link.hasOwnProperty('subLinks')) {
        showingSubMenu = true;
        subLinks = link.subLinks;
        break;
      }
      else {
        showingSubMenu = false;
        //Doing Task 6.4 here
        mainEl.innerHTML = `<h1>${evt.target.textContent}</h1>`;
      }
    };
  };



  // Task 5.7
  if(showingSubMenu === true) {
    buildSubMenu(subLinks);
    subMenuEl.style.top = '100%';
  }
  else {
    subMenuEl.style.top = '0';
  };

  // Task 5.8
  function buildSubMenu(subLinks) {
    subMenuEl.textContent = '';
    for(link of subLinks) {
      let anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.textContent = link.text;
      subMenuEl.appendChild(anchor) ;
    }
  }
});

//Task 6.0
subMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  const linkClicked = evt.target;
  if (linkClicked.tagName !== 'A') {return};
  console.log(linkClicked.textContent);

  //Task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = 0;

  //Task 6.2
  for(link of topMenuLinks) {
    link.classList.remove('active');
  };

  //Task 6.3
  mainEl.innerHTML = `<h1>${linkClicked.textContent}</h1>`;

});

//Task 6.4



