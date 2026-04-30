// // adciona um componente por meio de uma outra pg de ahtml.
// const carregarComponente = async (caminho, container) => {
//     try{
//         const resposta = await fetch(caminho);

//         // valida resposta
//         if (!resposta.ok) {
//             throw new Error('Erro ao carregar componente')

//         }

//         //converte para texto
//         const html = await resposta.text();

//         //injeta no DOM
//         container.innerHTML = html;

//     } catch (erro) {
//         console.error(erro);
//     }
// };

// const url = 'test-c.html'
// const container = document.querySelector('#app');
// carregarComponente(url, container)

// try{

    // let idade = -5;
    //     if (idade <0){
    //     let erro= new Error('Idade invalida');
    //     erro.codigo = 1001;
    //     erro.tipo = 'VALIDACAO';
    //     throw erro;
    // }




// }catch(erro){
//     let text =`
//     <strong>Nome do erro:</strong> ${erro.name}<br/>
//     <strong>Mensagem:</strong> ${erro.message} <br/>
//     <strong>Codigo:</strong>${erro.codigo}<br/>
//     <strong>Tipo:</strong>${erro.tipo}<br/>
//     <strong>Stack:</strong><span> ${erro.stack}</span>

//     `;
//     document.body.innerHTML = text;
// };



/* Criar uma função geradora de erro */

const geradorErro = (mensagem, codigo, tipo) => {
      
        let erro= new Error(mensagem);
        erro.codigo = codigo;
        erro.tipo = tipo;

        return erro;
};

/////////////////////////////////////////////////////////////////

try{
    let saldo = -3
    if (saldo < 0 ){
        throw geradorErro('banana', 25, 'cacho');
  

}

}catch(erro){
    console.log(erro);
};

/* Testando a função: carregarComponente
01 - Criar o componente que será injetado
02 - Criar o elemento que irá receber o componente (no index index.html) (<div id="app"></div>)
03 - Capturar o elemento que irá receber o componente( no index.html)
04 - Utilizar a função para carregar o componente */


/* Criar uma requisição HTTP com fetch e .then */
const url = 'https://viacep.com.br/ws/01001000/json/'
const consulta = fetch(url);

consulta
.then((response) => {
    const resp = resposta.json()
    console.log(resp)
    return resp
})

//converte JSON para javascript e extrai os dados
.then((dados) => {
    console.log(dados)
 })

//mostra os dados que foram pegos ali no primeiro then(as respostas do que veio do primeiro tehn)
.catch((error) => {
    console.warn(error)
})


/* Criar uma requisição HTTP com fecth e async/await */