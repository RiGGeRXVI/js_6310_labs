'use strict';

function addComicSansToggle() {
    // Функция переключения Comic Sans
    function toggleComicSans() {
        const pageWrapper = document.getElementById('page_wrapper');
        const mainSlider = document.querySelector('.main_slider_holder');
        const newsBox = document.querySelector('.news_box');
        const footer = document.querySelector('footer');
        const mainContent = document.getElementById('main-content');
        const content = document.getElementById('content');
        const navItems = document.querySelectorAll('li.lfr-nav-item');
        const buttons = document.querySelectorAll('button, .btn, a[href*="rss"], .bar_btns, .kai-btn-block');

        if (!pageWrapper) {
            console.log('Элемент с id="page_wrapper" не найден');
            return;
        }

        const currentFont = pageWrapper.style.fontFamily;
        const isComic = currentFont.includes('Comic Sans');

        const button = document.getElementById('comic-sans-toggle-btn');

        if (isComic) {
            // Выключаем Comic Sans и возвращаем стили
            pageWrapper.style.fontFamily = '';
            pageWrapper.style.backgroundColor = '';
            pageWrapper.style.color = '';
            pageWrapper.style.fontSize = '';
            if (mainSlider) mainSlider.style.background = '';
            if (newsBox) newsBox.style.background = '';
            if (footer) {
                footer.style.backgroundColor = '';
                footer.style.borderTop = '';
                footer.style.color = '';
                footer.style.padding = '';
            }
            if (mainContent) {
                mainContent.style.backgroundColor = '';
                mainContent.style.border = '';
                mainContent.style.borderRadius = '';
                mainContent.style.padding = '';
                mainContent.style.margin = '';
            }
            if (content) {
                content.style.backgroundColor = '';
                content.style.border = '';
                content.style.borderRadius = '';
                content.style.padding = '';
            }
            navItems.forEach(item => {
                item.style.backgroundColor = '';
            });
            buttons.forEach(button => {
                button.style.backgroundColor = '';
                button.style.color = '';
                button.style.border = '';
                button.style.borderRadius = '';
                button.style.padding = '';
                button.style.margin = '';
            });
            localStorage.setItem('kaiComicSansEnabled', 'false');
            if (button) button.textContent = 'С Выкл';
            console.log('Comic Sans выключен');
        } else {
            // Включаем Comic Sans
            pageWrapper.style.fontFamily = '"Comic Sans MS", "Comic Sans", cursive';
            pageWrapper.style.backgroundColor = '#A6E3E9';
            pageWrapper.style.color = '#626262ff';
            pageWrapper.style.fontSize = '20px';
            if (mainSlider) mainSlider.style.background = '#3A86FF';
            if (newsBox) newsBox.style.background = '#3A86FF';
            if (footer) {
                footer.style.fontFamily = '"Comic Sans MS", "Comic Sans", cursive';
                footer.style.backgroundColor = '#F7C6D0';
                footer.style.borderTop = '3px solid #E57CA1';
                footer.style.color = '#4B2C3D';
                footer.style.padding = '15px 0';
            }
            if (mainContent) {
                mainContent.style.backgroundColor = '#A6E3E9';
                mainContent.style.border = '3px solid #3A86FF';
                mainContent.style.borderRadius = '10px';
                mainContent.style.padding = '10px';
                mainContent.style.margin = '10px';
            }
            if (content) {
                content.style.backgroundColor = '#A6E3E9';
                content.style.border = '3px solid #3A86FF';
                content.style.borderRadius = '10px';
                content.style.padding = '5px';
            }
            navItems.forEach(item => {
                item.style.backgroundColor = '#3A86FF';
            });
            buttons.forEach(button => {
                button.style.backgroundColor = '#A6E3E9';
                button.style.color = 'white';
                button.style.border = 'none';
                button.style.borderRadius = '5px';
                button.style.padding = '3px';
                button.style.margin = '3px';
            });
            localStorage.setItem('kaiComicSansEnabled', 'true');
            if (button) button.textContent = 'C Вкл';
            console.log('Comic Sans включен');
        }
    }

    // Создаём кнопку
    function createToggleButton() {

        // Проверяем, не создана ли уже кнопка
        if (document.getElementById('comic-sans-toggle-btn')) {
            console.log('Кнопка уже добавлена');
            return;
        }

        // Пытаемся найти контейнер для кнопок
        const buttonContainer = document.querySelector('.box_links');
        if (!buttonContainer) {
            console.log('Не найден контейнер для кнопок');
            return;
        }

        const button = document.createElement('div');
        button.id = 'comic-sans-toggle-btn';
        button.title = 'Переключить Comic Sans';

        // Стили кнопки
        Object.assign(button.style, {
            width: '50px',
            height: '40px',
            border: 'none',
            backgroundColor: '#3A86FF',
            color: 'black',
            fontSize: '18px',
            cursor: 'pointer',
            margin: '0 0 0 6px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
            textAlign: 'center',
            float: 'left',
            borderRadius: '6px'
        });

        // Эффект при наведении
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });

        // При клике — переключаем Comic Sans
        button.addEventListener('click', toggleComicSans);

        const enabled = localStorage.getItem('kaiComicSansEnabled') === 'true';
        button.textContent = enabled ? 'С Вкл' : 'С Выкл';

        // Добавляем кнопку в контейнер
        buttonContainer.appendChild(button);
        console.log('Кнопка переключения Comic Sans добавлена');
    }

    

    // Автоматически применяем сохранённое состояние
    function applySavedState() {
        const enabled = localStorage.getItem('kaiComicSansEnabled') === 'true';
        if (!enabled) return;

        const pageWrapper = document.getElementById('page_wrapper');
        const mainSlider = document.querySelector('.main_slider_holder');
        const newsBox = document.querySelector('.news_box');
        const footer = document.querySelector('footer');
        const mainContent = document.getElementById('main-content');
        const content = document.getElementById('content');
        const navItems = document.querySelectorAll('li.lfr-nav-item');
        const buttons = document.querySelectorAll('button, .btn, a[href*="rss"], .bar_btns, .kai-btn-block');

        if (pageWrapper) {
            pageWrapper.style.fontFamily = '"Comic Sans MS", "Comic Sans", cursive';
            pageWrapper.style.backgroundColor = '#A6E3E9';
            pageWrapper.style.color = '#626262ff';
            pageWrapper.style.fontSize = '20px';
        }
        if (mainSlider) mainSlider.style.background = '#3A86FF';
        if (newsBox) newsBox.style.background = '#3A86FF';
        if (footer) {
            footer.style.fontFamily = '"Comic Sans MS", "Comic Sans", cursive';
            footer.style.backgroundColor = '#F7C6D0';
            footer.style.borderTop = '3px solid #E57CA1';
            footer.style.color = '#4B2C3D';
            footer.style.padding = '15px 0';
        }
        if (mainContent) {
                mainContent.style.backgroundColor = '#A6E3E9';
                mainContent.style.border = '3px solid #3A86FF';
                mainContent.style.borderRadius = '10px';
                mainContent.style.padding = '10px';
                mainContent.style.margin = '10px';
            }
        if (content) {
            content.style.backgroundColor = '#A6E3E9';
            content.style.border = '3px solid #3A86FF';
            content.style.borderRadius = '10px';
            content.style.padding = '5px';
        }
        navItems.forEach(item => {
            item.style.backgroundColor = '#3A86FF';
        });
        buttons.forEach(button => {
            button.style.backgroundColor = '#A6E3E9';
            button.style.color = 'white';
            button.style.border = 'none';
            button.style.borderRadius = '5px';
            button.style.padding = '3px';
            button.style.margin = '3px';
        });
        console.log('Comic Sans применён из сохранённого состояния');
    }

    //  Запуск
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            createToggleButton();
            applySavedState();
        });
    } else {
        createToggleButton();
        applySavedState();
    }
}

addComicSansToggle();
