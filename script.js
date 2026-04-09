const colorPicker = document.querySelectorAll('#color-picker');
const fontSelect = document.querySelectorAll('#font-select');
const themeToggle = document.querySelectorAll('#theme-toggle');
const artcicleColorPicker = document.querySelectorAll('#article-color-picker');
const body = document.querySelectorAll('.body');
const newsArticle = document.querySelectorAll('.news'); 

const loadPreferences = ()  =>{

};

colorPicker.addEventListener('input', (e) =>{
    const color = e.target.value;

    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('primaryColor', color);
});

artcicleColorPicker.addEventListener('input', (e) =>{

});

fontSelect.addEventListener('change', (e) =>{

});

themeToggle.addEventListener('click', () =>{

});

