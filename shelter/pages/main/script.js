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

