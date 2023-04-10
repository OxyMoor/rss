// menu
const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav__btn');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

const navList = document.querySelector('.nav__list');

nav.addEventListener('click', (event) => {
    if (event.currentTarget === nav) {
        navList.classList.toggle('open');
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

// popup
const friendsSection = document.querySelector('.friends');
const popup = document.querySelector('.popup');

async function getPetInfo() {  
    const petsInfo = '../../assets/pets.json';
    const res = await fetch(petsInfo);
    const data = await res.json(); 
    return data;
}

friendsSection.addEventListener('click', (event) => {
    if (event.target.closest('.slider__item')) {
        const item = event.target.closest('.slider__item');
        const itemId = item.dataset.id

        getPetInfo().then(data => {
            popup.innerHTML = `
            <div class="popup__inner">
                <button class="popup__btn">
                    <img class="popup__btn-icon" src="../../assets/icons/icon-close.svg" alt="icon: close icon">
                </button>
                <div class="popup__img-wrap">
                    <img class="popup__img" src="${data[itemId].img}" alt="image: pet ${data[itemId].name}">
                </div>
                <div class="popup__content">
                    <h3 class="popup__name">${data[itemId].name}</h3>
                    <h4 class="popup__type">${data[itemId].type} - ${data[itemId].breed}</h4>
                    <p class="popup__description">${data[itemId].description}</p>
                    <ul class="popup__list">
                        <li class="popup__item">
                            <span class="popup__item-title">Age: </span>
                            <span class="popup__item-info">${data[itemId].age}</span>
                        </li>
                        <li class="popup__item">
                            <span class="popup__item-title">Inoculations: </span>
                            <span class="popup__item-info">${data[itemId].inoculations.join(', ')}</span>
                        </li>
                        <li class="popup__item">
                            <span class="popup__item-title">Diseases: </span>
                            <span class="popup__item-info">${data[itemId].diseases.join(', ')}</span>
                        </li>
                        <li class="popup__item">
                            <span class="popup__item-title">Parasites: </span>
                            <span class="popup__item-info">${data[itemId].parasites.join(', ')}</span>
                        </li>
                    </ul>
                </div>
            </div>
            `
            popup.style.display = 'flex';
            body.classList.add('no-scroll');

            const closePopupBtn = document.querySelector('.popup__btn');

            closePopupBtn.addEventListener('click', () => {
                popup.style.display = 'none';
                body.classList.remove('no-scroll');
            });
            
            popup.addEventListener('click', (event) => {
                if (!event.target.closest('.popup__inner')) {
                    popup.style.display = 'none';
                    body.classList.remove('no-scroll');
                }
            });
        });
    }
});

// slider
const sliderBtnPrev = document.querySelector('.slider__btn-prev');
const sliderBtnNext = document.querySelector('.slider__btn-next');
const sliderItems = document.querySelector('.slider__items');
const sliderItemsInner = document.querySelector('.slider__items-inner');

function suffleArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function createItemsArr() {
    let items = [0, 1, 2, 3, 4, 5, 6, 7];
    let additionalItem = Math.floor(Math.random()*7);

    items.push(additionalItem);

    return suffleArr(items);
}

let items = createItemsArr();

async function renderItems() {
    const data = await getPetInfo();
    
    items.forEach((item) => {
        const sliderItem = document.createElement('div');

        sliderItem.classList.add('slider__item');
        sliderItem.setAttribute('data-id', `${item}`);
    
        getPetInfo().then(data => {
            sliderItem.innerHTML = `
                <img class="slider__img" src="${data[item].img}" alt="image: pet ${data[item].name}">
                <h3 class="slider__title">${data[item].name}</h3>
                <button class="slider__item-btn rounded-link">Learn more</button>
            `;
        });
    
        sliderItemsInner.appendChild(sliderItem);
    });
}

renderItems(); 



let sliderItemsInnerTranslate = 0

sliderBtnPrev.addEventListener('click', () => {
    let sliderItemsInnerGap = parseFloat(window.getComputedStyle(sliderItemsInner, null).columnGap);
    let sliderItemsWidth = parseFloat(window.getComputedStyle(sliderItems, null).width) + sliderItemsInnerGap;
    sliderItemsInnerTranslate -= sliderItemsWidth;
    sliderItemsInner.style.transform = `translateX(${sliderItemsInnerTranslate}px)`;
});

sliderBtnNext.addEventListener('click', () => {
    let sliderItemsInnerGap = parseFloat(window.getComputedStyle(sliderItemsInner, null).columnGap);
    let sliderItemsWidth = parseFloat(window.getComputedStyle(sliderItems, null).width) + sliderItemsInnerGap;
    sliderItemsInnerTranslate += sliderItemsWidth;
    sliderItemsInner.style.transform = `translateX(${sliderItemsInnerTranslate}px)`;
});