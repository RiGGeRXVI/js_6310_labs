'use strict';

function addComicSansToggle() {
    // Функция переключения Comic Sans
    function toggleComicSans() {
        const pageWrapper = document.getElementById('page_wrapper');
        const mainSlider = document.querySelector('.main_slider_holder');
        const newsBox = document.querySelector('.news_box');

        if (!pageWrapper) {
            console.log('Элемент с id="page_wrapper" не найден');
            return;
        }

        const currentFont = pageWrapper.style.fontFamily;
        const isComic = currentFont.includes('Comic Sans');

        if (isComic) {
            // Выключаем Comic Sans и возвращаем стили
            pageWrapper.style.fontFamily = '';
            pageWrapper.style.backgroundColor = '';
            pageWrapper.style.color = '';
            pageWrapper.style.fontSize = '';
            if (mainSlider) mainSlider.style.background = '';
            if (newsBox) newsBox.style.background = '';
            localStorage.setItem('kaiComicSansEnabled', 'false');
            console.log('Comic Sans выключен');
        } else {
            // Включаем Comic Sans
            pageWrapper.style.fontFamily = '"Comic Sans MS", "Comic Sans", cursive';
            pageWrapper.style.backgroundColor = '#bcce9fff';
            pageWrapper.style.color = '#3d0343ff';
            pageWrapper.style.fontSize = '20px';
            if (mainSlider) mainSlider.style.background = '#4b4b4bff';
            if (newsBox) newsBox.style.background = '#fbd364ff';
            localStorage.setItem('kaiComicSansEnabled', 'true');
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
        button.textContent = 'С';
        button.title = 'Переключить Comic Sans';

        // Стили кнопки
        Object.assign(button.style, {
            width: '30px',
            height: '30px',
            border: 'none',
            backgroundColor: '#00ff37ff',
            color: 'white',
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

        if (pageWrapper) {
            pageWrapper.style.fontFamily = '"Comic Sans MS", "Comic Sans", cursive';
            pageWrapper.style.backgroundColor = '#fffbe7';
            pageWrapper.style.color = '#9b41d4';
            pageWrapper.style.fontSize = '20px';
        }
        if (mainSlider) mainSlider.style.background = '#f6ebff';
        if (newsBox) newsBox.style.background = '#f6ebff';
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
