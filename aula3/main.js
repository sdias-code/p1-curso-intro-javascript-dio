
//trabalhando com funções

function soma( n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novoNome){
    return frase.replace(nome, novoNome);
}
var mensagem = ""; //variável global

function validaIade(idade){    
    //var mensagem = ""; variável local
    if(idade >= 18){
        mensagem = "Olá você é maior de idade!";
    } else{
        mensagem = "Olá você é menor de idade";
    }
    return mensagem;
}

var idade = prompt("Digite sua idade:");
alert(validaIade(idade));

//alert(setReplace("Vamos ganhar Japão!", "Japão", "Brasil" ));

//alert("O resultado da soma = "+soma(10,5));

