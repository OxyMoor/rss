const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav__btn');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

nav.addEventListener('click', (event) => {
    if (event.currentTarget === nav) {
        nav.classList.toggle('open');
        body.classList.toggle('no-scroll');
        overlay.classList.toggle('open');
    } else {
        nav.classList.remove('open');
        body.classList.remove('no-scroll');
    }
});

overlay.addEventListener('click', () => {
    nav.classList.remove('open');
    body.classList.remove('no-scroll');
    overlay.classList.remove('open');
});