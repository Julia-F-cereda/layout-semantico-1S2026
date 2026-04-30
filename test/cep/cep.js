const cep = document.getElementById('.busca');
const url = 'https://viacep.com.br/ws/01001000/json/'


cep.addEventListener('click') =>() {
    const consulta = fetch(url);
consulta

    .then((resposta) => {
        if(!resposta.ok){
            throw new Error('Erro na Requisição.')
        }
        return resposta.json()
    }) 

    .then((dados) => {

        if(dados.erro){
            throw new Error('CEP inválido ou não encontrado.')
        }
        console.log(dados)
    }) 

    .catch((error) => {
        console.warn(error)
    }) 

}


/* Criar uma requisição HTTP com fecth e async/await */