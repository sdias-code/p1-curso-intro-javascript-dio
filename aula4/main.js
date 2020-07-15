
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar.";
    alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://odia.ig.com.br/");
    //window.location.href = "https://odia.ig.com.br/";
}

function clicar(){
    document.getElementById("mouseclick").innerHTML = "Você clicou!!!";
}

function passeMouse(elemento){
    //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function tiraMouse(elemento){
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui!!";
    elemento.innerHTML = "Passe o mouse aqui!!";
}

function load(){
    alert("Página carregada");

}

function funcaoChange(elemento){
    console.log(elemento.value);
} 