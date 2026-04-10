const colorPicker = document.querySelectorAll('#color-picker');
const fontSelect = document.querySelectorAll('#font-select');
const themeToggle = document.querySelectorAll('#theme-toggle');
const artcicleColorPicker = document.querySelectorAll('#article-color-picker');
const body = document.querySelectorAll('.body');
const newsArticle = document.querySelectorAll('.news'); 

const loadPreferences = ()  =>{
    //cor
    const savedColor = localStorage.getItem('primaryColor');
    if (savedColor) {
        document.documentElement.style.setProperty('--primary-color', savedColor);
        colorPicker.value = savedColor;
    }

    //cor dos artigos
    const savedArticleColor = localStorage.getItem('articleColor');
    if (savedArticleColor){
        document.documentElement.style.setProperty('', savedArticleColor);
        artcicleColorPicker.value = savedArticleColor;

    }

    //fonte
    const savedFont = localStorage.getItem('fontFamily');
    if (savedFont){
        document.documentElement.style.setProperty('--font-family', savedFont);
        fontSelect.value = savedFont;

    }

    //tema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme == 'dark') {
        body.classList.add('dark');
        themeToggle.innerHTML = '<span class="material-icons">light_mode</span>';
    }
};


colorPicker.addEventListener('input', (e) =>{
    const color = e.target.value;

    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('primaryColor', color);
});

artcicleColorPicker.addEventListener('input', (e) =>{
    const color = e.target.value;
    newsArticle.forEach(article => {article.style.backgroundColor = color;
    });
    localStorage.setItem('articleColor', color);

});

fontSelect.addEventListener('change', (e) =>{
    const fonte = e.target.value;
    document.documentElement.style.setProperty('--font-family', fonte);

    localStorage.setItem('fonteFamily', fonte);

});

themeToggle.addEventListener('click', () =>{
    body.classList.toggle('dark');
    const isDark = body.classList.constains('dark');

    themeToggle.innerHTML = isDark
    ?'<span class="material-icons">light_mode</span>' //? é o if ternario
    :'<span class="material-icons">dark_mode</span>';

    //se tem dark voce mantem dark, se nao tiver dark voce muda para o light

    localStorage.setItem('theme', isDark ? 'dark' : 'light');

});

