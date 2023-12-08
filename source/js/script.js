let navMain = document.querySelector('.page-navigation__list');
let navToggle = document.querySelector('.page-navigation__toggle');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('page-navigation__toggle--close')) {
    navToggle.classList.remove('page-navigation__toggle--close');
    navToggle.classList.add('page-navigation__toggle--open');
  } else {
    navToggle.classList.add('page-navigation__toggle--close');
    navToggle.classList.remove('page-navigation__toggle--open');
  }
});

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('page-navigation__list--close')) {
    navMain.classList.remove('page-navigation__list--close');
    navMain.classList.add('page-navigation__list--open');
  } else {
    navMain.classList.add('page-navigation__list--close');
    navMain.classList.remove('page-navigation__list--open');
  }
});
