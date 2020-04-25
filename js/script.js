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

//Task 1.0
let mainEl = document.querySelector('main');
//Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';
//Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
//Task 1.3
mainEl.classList ='flex-ctr';

//Tasks 2

//Task 2.0
topMenuEl = document.getElementById('top-menu');
//Task 2.1
topMenuEl.style.height = '100%';
//Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
//Task 2.3
topMenuEl.classList = 'flex-around';

//Tasks 3

//Task 3.1
for(menuLink of menuLinks) {
    let anchor = document.createElement('a');
    anchor.href = menuLink.href;
    anchor.textContent = menuLink.text;
    topMenuEl.appendChild(anchor) ;
};

//Tasks 4

//Task 4.1
const subMenuEl = document.getElementById('sub-menu');
//Task 4.1
subMenuEl.style.height = "100%";
//Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
//Task 4.3
subMenuEl.classList = 'flex-around';
//Task 4.4
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

//Tasks 5

//Task 5.1
const topMenuLinks = topMenuEl.querySelectorAll('a');
let showingSubMenu = false;

//Task 5.2
topMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== 'A') {return};
  console.log(evt.target.textContent);

  //Task 5.3
  if (evt.target.classList.contains('active')) {
    evt.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return
  };

  //Task 5.4
  for(link of topMenuLinks) {
    link.classList.remove('active');
  };

  //Task 5.5
  evt.target.classList.add('active');

  //Task 5.6
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



