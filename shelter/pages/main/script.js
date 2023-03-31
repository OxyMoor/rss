// PART 1
// плавный скролл по якорям
const anchorLinks = document.querySelectorAll('.anchor-link');

function smoothScroll(link) {
    const id = link.getAttribute('href').substring(1);
    const section = document.getElementById(id);
    
    if (section) {
        section.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        });
    }
}

anchorLinks.forEach(anchorLink => {
    anchorLink.addEventListener('click', (event) => {
        event.preventDefault();

        smoothScroll(anchorLink);
    });
});

// score
console.log(`
Score: 100/100
1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px +14
2.Вёрстка страницы Main соответствует макету при ширине экрана 768px +14
3.Вёрстка страницы Main соответствует макету при ширине экрана 320px +14
4.Вёрстка страницы Pets соответствует макету при ширине экрана 1280px +6
5.Вёрстка страницы Pets соответствует макету при ширине экрана 768px +6
6.Вёрстка страницы Pets соответствует макету при ширине экрана 320px +6
7.Ни на одном из разрешений не появляется горизонтальная полоса прокрутки +20
8.Верстка резиновая +8
9.При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню +4
10.Верстка обеих страниц валидная +8
`);