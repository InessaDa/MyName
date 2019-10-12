var btn = document.querySelector('.main-header__nav-btn-burger');
var topBurgerBtn = document.querySelector('.main-header__nav-btn-burger--top');
var centerBurgerBtn = document.querySelector('.main-header__nav-btn-burger--center');
var bottomBurgerBtn = document.querySelector('.main-header__nav-btn-burger--bottom');
var menu = document.querySelector('.main-nav--list');


menu.classList.remove('main-nav--list-active');

btn.addEventListener("click", function (_event) {
    topBurgerBtn.classList.toggle('main-header__nav-btn-burger--top-active');
    centerBurgerBtn.classList.toggle('main-header__nav-btn-burger--center-active');
    bottomBurgerBtn.classList.toggle('main-header__nav-btn-burger--bottom-active');
    menu.classList.toggle('main-nav--list-active');

});