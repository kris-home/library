let text = "Оценка за работу согласно предложенным Критериям оценки, с учётом Особенностей проверки вёрстки на соответствие макету 100 баллов:\n\nВёрстка валидная + 10\n\nВёрстка семантическая + 16\n<header>, <main>, <footer> +2.\nшесть элементов <section> (по количеству секций) +2.\nтолько один заголовок <h1> +2.\nпять заголовков <h2> (легко отличимы на верхних границах секций, имеют единый стиль) +2.\nодин элемент <nav> (панель навигации в хедере) +2.\nдва списка ul > li > a (панель навигации, ссылки на соцсети в футере) +2.\nсемь кнопок <button> +2.\nдва инпута <input> +2.\n\nВёрстка соответствует макету +54\nСекция Welcome +4.\nСекция About +6:\nСекция Favorites +8:\nСекция CoffeShop +6.\nСекция Contacts +6:\nСекция LibraryCard +8:\nБлок Footer +8:\n\nОбщие требования к верстке +20\nдля построения сетки используются флексы или гриды (display: flex... или display: grid...) +2.\nпри уменьшении масштаба страницы браузера вся вёрстка (контент и фоны) размещается по центру, а не сдвигается в сторону +2.\nиконки добавлены в формате .svg. SVG +2.\nизображения добавлены в формате .jpg (.jpeg) или .png +2.\nесть favicon +2.\nплавная прокрутка по якорям +2.\nв футере название ссылки Username заменено и ведет на GitHub студента +2.\nв футере ссылка The Rolling Scopes School ведет на страницу курса https://rs.school/js-stage0/ +2.\nинтерактивность элементов согласно макету. Интерактивность включает в себя не только изменение внешнего вида курсора, но и другие визуальные эффекты +2.\nобязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияет на соседние элементы +2.";
let text_2 = 'Вёрстка соответствует макету. Ширина экрана 768px +26\nблок < header > +2\nсекция Welcome + 2\nсекция About + 2.\nпод картинкой находится 5 точек: +2\nсекция Favorites + 4\nсекция CoffeShop + 4\nсекция Contacts + 4\nсекция LibraryCard + 4\nблок < footer > + 2\nНи на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки.Весь контент страницы при этом сохраняется: не обрезается и не удаляется + 12\nнет полосы прокрутки при ширине страницы от 1440рх до 640рх + 4.\nэлементы не выходят за пределы окна браузера при ширине страницы от 1440рх до 640рх + 4.\nэлементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх + 4.\nНа ширине экрана 768рх реализовано адаптивное меню + 12(Рекомендуется сделать появление бургер - меню на ширине 1024px):\nпри нажатии на бургер - иконку плавно появляется адаптивное меню + 4\nпри нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран + 4\nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, а само адаптивное меню при этом плавно скрывается + 2\nразмеры открытого бургер - меню соответствуют макету, так же открытое бургер - меню проверяется на PixelPerfect + 2';
let text_3 = ' Карусель реагирует на нажатие кнопок (кнопки под каруселью и стрелочки слева и справа в мобильной версии) и происходит анимация перелистывания.\n На экране шириной 1440px проверяем, чтобы было доступно 2 других скрытых картинки. При каждом нажатии выезжает следующая, и так до границ справа и слева.\n Выделенная кнопка под каруселью (имеется ввиду кнопка соответствующая активному слайду и которая имеет коричневый цвет) - неактивная.\n Если анимация карусели не успела завершиться, при этом нажата была следующая кнопка, то картинка не должна зависнуть в промежуточном состоянии.\n На экране шириной 768px проверяем, чтобы было доступно 4 других скрытых картинки. Для этого меняем разрешение и перезагружаем страницу. Теперь доступных перемещений становится 5.\n Неактивными становятся не только выделенные кнопки, но и стрелочки на границах карусели.\n "Слайдер" реагирует на нажатие кнопок панели навигации +-\n Во время анимаций высота блока Favorites не должна меняться.\n В блоке Favorites все кнопки должны иметь имя Buy, а не Own\n Дизайн модального окна REGISTER соответствует макету.\n При нажатии кнопки Sign Up в блоке Digital Library Cards появляется модальное окно REGISTER.\n Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения).\n При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается.\n Дизайн модального окна LOGIN соответствует макету.\n При нажатии кнопки Log In в блоке Digital Library Cards также появляется модальное окно LOGIN.\n Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения).\n При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается.\n\n\n Привет! В данном задании у меня есть много не выполненных пунктов, если у тебя будет желние и возможность подсказать каким образом можно было сделать те или иные задачи, что бы я знала на будущее как это реализовывать, я буду очень благодарна! Спасибо за проверку моей работы)';
console.log(text_3);

let click = document.querySelector('.burger-menu');
let button = document.querySelector('.header-burger');
let click_menu_item = document.querySelector('.header-menu-item-a');
let icon = document.querySelector('.burger');
let icon_chanche = document.querySelector('.burger-close');
let icon_burger = 'img/burger.svg';
let icon_close = 'img/close.svg';
let modal_profil = document.querySelector('.modal-profil');
let header_icon_profile = document.querySelector('.header-icon-profile');
let modal_profil_close = document.querySelector('.modal-profil-close');
let modal_profil_open = document.querySelector('.modal-profil-open');

header_icon_profile.onclick = function (){
    modal_profil.classList.toggle('modal-profil-close');
    modal_profil.classList.toggle('modal-profil-open');
}

button.onclick = function () {
    click.classList.toggle('open-burger-menu-click');
    click.classList.toggle('close-burger-menu-click');
    icon.classList.toggle('burger-close');
    icon.classList.toggle('burger');
    if (icon.src.match("close")) {
        icon.src = icon_burger;
    } else {
        icon.src = icon_close;
    }
};

click_menu_item.onclick = function () {
    click.classList.toggle('close-burger-menu-click');
    click.classList.toggle('open-burger-menu-click');
    icon.classList.remove('burger-close');
    icon.classList.add('burger');
    icon.src = icon_burger;

};

document.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.header-burger') && !target.closest('.burger-menu')) {
        click.classList.add('close-burger-menu-click');
        click.classList.remove('open-burger-menu-click');
        icon.classList.remove('burger-close');
        icon.classList.add('burger');
        icon.src = icon_burger;
    } else if (!target.closest('.header-icon-profile') && !target.closest('.modal-profil')){
        modal_profil.classList.add('modal-profil-close');
        modal_profil.classList.remove('modal-profil-open');
    }
})
document.addEventListener('scroll', function (event) {
    click.classList.add('close-burger-menu-click');
    click.classList.remove('open-burger-menu-click');
    icon.classList.remove('burger-close');
    icon.classList.add('burger');
    modal_profil.classList.add('modal-profil-close');
        modal_profil.classList.remove('modal-profil-open');
    icon.src = icon_burger;
})


let sliderImages = document.querySelectorAll('.img'),
    carretLeft = document.querySelector('.left'),
    carretRight = document.querySelector('.right'),
    lineSlider = document.querySelector('.line'),
    slider = document.querySelector('.about-images-items'),
    count = 0,
    width,
    sliderDot = document.querySelectorAll('.dot');



function carretBlur(index) {
    if (index === 0) {
        carretLeft.classList.add('carret-blur');
        carretRight.classList.remove('carret-blur');
    }
    else if (index === 4) {
        carretRight.classList.add('carret-blur');
        carretLeft.classList.remove('carret-blur');
    } else {
        carretRight.classList.remove('carret-blur');
        carretLeft.classList.remove('carret-blur');
    }
}
function thisSlide(index) {
    sliderDot.forEach(item => item.checked = false);
    sliderDot[index].checked = true;
}

resize();
window.addEventListener('resize', resize);

function resize() {
    if (window.innerWidth <= 1024) {
        count = 0;
        sliderDot[0].checked = true;
        console.log('<=1024');
        carretRight.onclick = function () {
            count++;
            carretLeft.classList.remove('carret-blur');
            if (count >= sliderImages.length - 1) {
                carretRight.classList.add('carret-blur');
                count = sliderImages.length - 1;
            }
            ScrollingByArrows();
            thisSlide(count);
        }

        carretLeft.onclick = function () {
            count--;
            carretRight.classList.remove('carret-blur');
            if (count <= 0) {
                carretLeft.classList.add('carret-blur');
                count = 0;
            }
            ScrollingByArrows();
            thisSlide(count);
        }

        function ScrollingByArrows() {
            lineSlider.style.transform = `translateX(${-count * slider.offsetWidth}px)`;
            console.log('сработало 1');
        }

        sliderDot.forEach((sliderDot, index) => {
            sliderDot.addEventListener('click', () => {
                count = index;
                ScrollingByArrows();
                thisSlide(count);
                carretBlur(index);

            })
        })
    }
    else if (window.innerWidth > 1024) {
         count = 0;
        sliderDot[0].checked = true;   
        console.log(window.innerWidth);
        console.log('> 1024');
    
        sliderDot.forEach((sliderDot, index) => {
            sliderDot.onclick = function () {
                count = index;
                ScrollingByDot();
                thisSlide(count);
                console.log(count);
                console.log(index);
                console.log(width);
            }
        })

        function ScrollingByDot() {
            width = slider.offsetWidth / 3;
            lineSlider.style.transform = `translateX(${-count * width}px)`;
            console.log(lineSlider.style.transform);
            console.log('сработало 2');
        }

    }
    else {
        console.log('ошибка чтения страницы');
    }
}


let winter = document.querySelector('.winter'),
spring = document.querySelector('.spring'),
summer = document.querySelector('.summer'),
autumn = document.querySelector('.autumn'),
winterBtn = document.querySelector('.winter-btn'),
springBtn = document.querySelector('.spring-btn'),
summerBtn = document.querySelector('.summer-btn'),
autumnBtn = document.querySelector('.autumn-btn'),
book = document.querySelector('.book');




winterBtn.onclick = function () {
    spring.style.display = 'none';
    winter.style.display = 'flex';
    summer.style.display = `none`;
    autumn.style.display = `none`;

    }
    springBtn.onclick = function () {
      spring.style.display = 'flex';
        winter.style.display = 'none';
        summer.style.display = `none`;
        autumn.style.display = `none`;
    }

    summerBtn.onclick = function () {
        spring.style.display = 'none';
        winter.style.display = 'none';
        summer.style.display = `flex`;
        autumn.style.display = `none`;
    }

    autumnBtn.onclick = function () {
        spring.style.display = 'none';
        winter.style.display = 'none';
        summer.style.display = `none`;
        autumn.style.display = `flex`;
    };

    let sign_up = document.querySelectorAll('.sign_up'),
    log_in = document.querySelectorAll('.log_in'),
    html = document.querySelector('html'),
    body = document.querySelector('body'),
    modal_shadow = document.querySelector('.modal-shadow'),
    modal_register = document.querySelector('.modal-register'),
    modal_noActive = document.querySelector('.modal-no-active'),
    modal_active = document.querySelector('.modal-active'),
    modal_shadowActive = document.querySelector('.modal-shadow-active'),
    modal_openHtml = document.querySelector('.modal-opened'),
    wraper = document.querySelector('.wraper'),
    modal_login = document.querySelector('.modal-login'),
    modal_close = document.querySelectorAll('.forma-close'),
    link_register = document.querySelector('.forma-footer-link-register'),
    link_login = document.querySelector('.forma-footer-link-login');
    
    sign_up.forEach((sign_up) =>
    sign_up.onclick = function () {
         html.style.top = -window.scrollY + "px";
         console.log(window.scrollY);
         html.classList.add('modal-opened');
        modal_shadow.classList.add('modal-shadow-active');
        modal_register.classList.remove('modal-no-active');
        modal_register.classList.add('modal_active');
        
    })
    log_in.forEach((log_in) =>
    log_in.onclick = function () {
        html.style.top = -window.scrollY + "px";
        console.log(window.scrollY);
        html.classList.add('modal-opened');
        modal_shadow.classList.add('modal-shadow-active');
        modal_login.classList.remove('modal-no-active');
        modal_login.classList.add('modal_active');
    })

    modal_close.forEach((close) =>
    close.onclick = function () {
        html.style.top = -window.scrollY + "px";
        console.log(window.scrollY);
        html.classList.remove('modal-opened');
        modal_shadow.classList.remove('modal-shadow-active');
        modal_register.classList.add('modal-no-active');
        modal_register.classList.remove('modal_active');
        modal_login.classList.add('modal-no-active');
        modal_login.classList.remove('modal_active');
    })
    link_register.onclick = function () {
        modal_register.classList.add('modal-no-active');
        modal_register.classList.remove('modal_active');
        modal_login.classList.remove('modal-no-active');
        modal_login.classList.add('modal_active');
    }
    link_login.onclick = function () {
        modal_register.classList.remove('modal-no-active');
        modal_register.classList.add('modal_active');
        modal_login.classList.add('modal-no-active');
        modal_login.classList.remove('modal_active');
    }