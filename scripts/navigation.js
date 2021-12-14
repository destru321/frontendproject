const nav = document.querySelector('.header__navigation');
const menu = document.querySelector('#menu');
const menuOpen = document.querySelector('#menuOpen');

menu.addEventListener('click', () => {
    nav.classList.add('nav--visible');
    menu.classList.add('header__open');
    menuOpen.classList.remove('header__open');
});

menuOpen.addEventListener('click', () => {
    nav.classList.remove('nav--visible');
    menu.classList.remove('header__open');
    menuOpen.classList.add('header__open');
});