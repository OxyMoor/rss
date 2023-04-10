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
Score: 54/100
1) Реализация burger menu на обеих страницах +20 (меню скрывается не плавно)
2) Реализация слайдера-карусели на странице Main +20 (слайдер не бесконечен, формируется из объекта только 1 раз - при загрузке страницы, косяки при ресайзе окна)
3) Реализация пагинации на странице Pets +2 (не реализовано, но можно наскребсти пару баллов за то, что при открытии первой страницы кнопки << и < неактивны)
4) Реализация попап на обеих страницах +12
`);