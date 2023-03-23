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
Страница Main: 60/60
1)Проверка верстки +7 
2)Вёрстка соответствует макету +35
3)Требования к css +6
4)Интерактивность элементов +12
Страница Pets: 40/40
1)Проверка верстки +7 
2)Вёрстка соответствует макету +35
3)Требования к css +6
4)Интерактивность элементов +12
`);