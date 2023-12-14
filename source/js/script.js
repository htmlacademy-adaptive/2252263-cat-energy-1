let navMain = document.querySelector('.page-navigation');
let navToggle = document.querySelector('.page-header__toggle-navigation');

navToggle.classList.remove('page-header__toggle-navigation--nojs');

navMain.classList.remove('page-navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('page-header__toggle-navigation--close')) {
    navToggle.classList.remove('page-header__toggle-navigation--close');
    navToggle.classList.add('page-header__toggle-navigation--open');
  } else {
    navToggle.classList.add('page-header__toggle-navigation--close');
    navToggle.classList.remove('page-header__toggle-navigation--open');
  }
});

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('page-navigation--close')) {
    navMain.classList.remove('page-navigation--close');
    navMain.classList.add('page-navigation--open');
  } else {
    navMain.classList.add('page-navigation--close');
    navMain.classList.remove('page-navigation--open');
  }
});
