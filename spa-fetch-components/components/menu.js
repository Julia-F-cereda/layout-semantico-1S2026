//esta exportando e o main vai importar
//usar em outro lugar
export const iniciarMenu = () =>{
    const menus = document.querySelectorAll('[data-menu]');
    console.log(menus);
    //vai percorrer e procurar todos os itens que tem menu
    menus.forEach((menu) => {

    const botao = menu.querySelector('.menu__botao');
//verifica
    const toggleMenu = () => {

        menu.classList.toggle('active');

        const ativo = menu.classList.contains('active');

        botao.setAttribute('aria-expanded', ativo);
        botao.setAttribute('arial-label', ativo ? 'Fechar Menu' : 'Abrir Menu');
    };

    const fecharComEsc = (event) => {

        const isEsc = event.key === 'Escape';
        const ativo = menu.classList.contains('active');

        if (isEsc && ativo) {
            menu.classList.remove('active');
            botao.setAttribute('aria-expanded', false);
            botao.setAttribute('aria-label', 'Abrir Menu');
            botao.focus();
        }

    };

    botao.addEventListener('pointerdown', toggleMenu);
    document.addEventListener('keydown', fecharComEsc);


    });

};
