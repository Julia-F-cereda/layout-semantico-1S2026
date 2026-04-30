import { iniciarMenu } from "../components/menu.js";

// carrega html via fetch e injeta no container
const carregarComponente = async (caminho, container) => {
    try{
        const resposta = await fetch(caminho);

        // valida resposta
        if (!resposta.ok) {
            throw new Error('Erro ao carregar componente')

        }

        //converte para texto
        const html = await resposta.text();

        //injeta no DOM
        container.innerHTML = html;

    } catch (erro) {
        console.error(erro);
    }
};

//controla navegação spa
const iniciarLinks = () => {
    const conteudo = document.querySelector('[data-conteudo]');

    document.querySelectorAll('[data-link]').forEach((link) => {
        link.addEventListener('click', async (event)=>{

            event.preventDefault();

            const pagina = link.dataset.link;

            const menu = document.querySelector('[data-menu]');
            const botao = document.querySelector('.menu__botao');

            if (menu.classList.contains('active')) {
                menu.classList.remove('active');

                botao.setAttribute('aria-expanded', false);
                botao.setAttribute('aria-label', 'Abrir Menu');
            }

            await carregarComponente(./pages/${pagina}.html, conteudo);

        });

    });
};

//inicialização geral da aplicação 
const iniciarApp = async () => {

const containerMenu = document.querySelector('[data-componente="menu"]')

await carregarComponente('./components/menu.html', containerMenu)

iniciarMenu();

iniciarLinks();

const conteudo = document.querySelector('[data-conteudo]');
await carregarComponente('./pages/home.html', conteudo);

};

iniciarApp();
