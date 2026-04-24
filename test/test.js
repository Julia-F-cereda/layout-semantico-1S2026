// let anna = (num) => console.log(num * 5);

//     let num = 'senai';
let result = "Not Active!"
let isActive = true;
// console.log(result, isActive)

    if(isActive == true) {
        result = "Active!"
    }else{
        result = "not Active!"
    }
console.log(result, isActive)

try{
    // num.toUpperCase();
    // console.log(num)


}catch(erro){
    let text = 
    `
    <strong>Nome do erro:</strong> ${erro.name}<br/>
    <strong>Mensagem:</strong> ${erro.message} <br/>
    <strong>Stack</strong><span> ${erro.stack}</span>
    `
}

