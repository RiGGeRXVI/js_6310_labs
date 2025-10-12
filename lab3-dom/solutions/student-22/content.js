'use strict';

function addComicSansToggle() {
    const STYLES = {
        font: '"Comic Sans MS", "Comic Sans", cursive',
        bgMain: '#A6E3E9',
        colorText: '#626262ff',
        blue: '#3A86FF',
        pink: '#F7C6D0',
        borderPink: '#E57CA1',
        darkText: '#4B2C3D',
        fontSize: '20px'
    };

    function applyComicStyles() {
        const pageWrapper = document.getElementById('page_wrapper');
        const mainSlider = document.querySelector('.main_slider_holder');
        const newsBox = document.querySelector('.news_box');
        const footer = document.querySelector('footer');
        const mainContent = document.getElementById('main-content');
        const content = document.getElementById('content');
        const navItems = document.querySelectorAll('li.lfr-nav-item');
        const buttons = document.querySelectorAll('button, .btn, a[href*="rss"], .bar_btns, .kai-btn-block');

        if (pageWrapper) {
            Object.assign(pageWrapper.style, {
                fontFamily: STYLES.font,
                backgroundColor: STYLES.bgMain,
                color: STYLES.colorText,
                fontSize: STYLES.fontSize
            });
        }

        if (mainSlider) mainSlider.style.background = STYLES.blue;

        if (newsBox) {
            newsBox.style.background = STYLES.blue;
            if (newsBox.parentElement) {
                newsBox.parentElement.style.backgroundColor = '#E0F7FA';
                newsBox.parentElement.style.borderRadius = '10px';
            }
        }

        if (footer) {
            Object.assign(footer.style, {
                fontFamily: STYLES.font,
                backgroundColor: STYLES.pink,
                borderTop: `3px solid ${STYLES.borderPink}`,
                color: STYLES.darkText,
                padding: '15px 0'
            });
        }

        if (mainContent) {
            Object.assign(mainContent.style, {
                backgroundColor: STYLES.bgMain,
                border: `3px solid ${STYLES.blue}`,
                borderRadius: '10px',
                padding: '10px',
                margin: '10px'
            });

            Array.from(mainContent.children).forEach(child => {
                child.style.border = `2px dashed ${STYLES.blue}`;
                child.style.padding = '5px';
            });
        }

        if (content) {
            Object.assign(content.style, {
                backgroundColor: STYLES.bgMain,
                border: `3px solid ${STYLES.blue}`,
                borderRadius: '10px',
                padding: '5px'
            });
        }

        navItems.forEach(item => {
            item.style.backgroundColor = STYLES.blue;
        });

        buttons.forEach(button => {
            Object.assign(button.style, {
                backgroundColor: STYLES.bgMain,
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '3px',
                margin: '3px'
            });
        });
    }

    function resetComicStyles() {
        const allStyled = [
            '#page_wrapper',
            '.main_slider_holder',
            '.news_box',
            'footer',
            '#main-content',
            '#content'
        ];

        allStyled.forEach(sel => {
            const el = document.querySelector(sel);
            if (el) Object.assign(el.style, {
                fontFamily: '',
                backgroundColor: '',
                color: '',
                fontSize: '',
                border: '',
                borderRadius: '',
                padding: '',
                margin: ''
            });
        });

        document.querySelectorAll('li.lfr-nav-item, button, .btn, a[href*="rss"], .bar_btns, .kai-btn-block')
            .forEach(el => el.style.backgroundColor = '');

        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            Array.from(mainContent.children).forEach(child => {
                child.style.border = '';
                child.style.padding = '';
            });
        }

        const newsBox = document.querySelector('.news_box');
        if (newsBox && newsBox.parentElement) {
            newsBox.parentElement.style.backgroundColor = '';
            newsBox.parentElement.style.borderRadius = '';
        }
    }

    function toggleComicSans() {
        const enabled = localStorage.getItem('kaiComicSansEnabled') === 'true';
        const button = document.getElementById('comic-sans-toggle-btn');

        if (enabled) {
            resetComicStyles();
            localStorage.setItem('kaiComicSansEnabled', 'false');
            if (button) button.textContent = 'С Выкл';
            console.log('Comic Sans выключен');
        } else {
            applyComicStyles();
            localStorage.setItem('kaiComicSansEnabled', 'true');
            if (button) button.textContent = 'С Вкл';
            console.log('Comic Sans включен');
        }
    }

    function createToggleButton() {
        if (document.getElementById('comic-sans-toggle-btn')) return;

        const buttonContainer = document.querySelector('.box_links');
        if (!buttonContainer) return;

        const button = document.createElement('div');
        button.id = 'comic-sans-toggle-btn';
        button.title = 'Переключить Comic Sans';

        Object.assign(button.style, {
            width: '50px',
            height: '40px',
            border: 'none',
            backgroundColor: STYLES.blue,
            color: 'black',
            fontSize: '18px',
            cursor: 'pointer',
            margin: '0 0 0 6px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
            textAlign: 'center',
            float: 'left',
            borderRadius: '6px'
        });

        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });

        button.addEventListener('click', toggleComicSans);

        const enabled = localStorage.getItem('kaiComicSansEnabled') === 'true';
        button.textContent = enabled ? 'С Вкл' : 'С Выкл';

        buttonContainer.appendChild(button);
    }

    function applySavedState() {
        const enabled = localStorage.getItem('kaiComicSansEnabled') === 'true';
        if (enabled) applyComicStyles();
    }

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
