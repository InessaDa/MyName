var menu = document.querySelector('.pink--navigation-list');
var closeButton = document.querySelector('.pink--close-button__icon');
var menuButton = document.querySelector('.pink--menu-button__icon');
var header = document.querySelector('.pink--header');
var page = document.querySelector('.pink--page');

menu.classList.add('pink--navigation-list--hidden');
header.classList.add('pink--header--closed-menu');
closeButton.classList.add('pink--close-button__icon--hidden');


menuButton.addEventListener("click", function (_event) {
  menu.classList.remove('pink--navigation-list--hidden');
  header.classList.remove('pink--header--closed-menu');
  menuButton.classList.add('pink--menu-button__icon--hidden');
  closeButton.classList.remove('pink--close-button__icon--hidden');
  page.classList.add('pink--page--padding');
});

closeButton.addEventListener("click", function(_event) {
  menu.classList.add('pink--navigation-list--hidden');
  header.classList.add('pink--header--closed-menu');
  closeButton.classList.add('pink--close-button__icon--hidden');
  menuButton.classList.remove('pink--menu-button__icon--hidden');
  page.classList.remove('pink--page--padding');
})
