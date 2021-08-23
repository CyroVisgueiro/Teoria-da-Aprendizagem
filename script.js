function mostrarCont1(){
    var conteudo = document.getElementById('cont1');
    conteudo.classList.toggle('show');
    var imgCont = document.getElementById('imgCont1');
    imgCont.classList.toggle('show');
}
function mostrarCont2(){
    var conteudo = document.getElementById('cont2');
    conteudo.classList.toggle('show');
    var imgCont = document.getElementById('imgCont2');
    imgCont.classList.toggle('show');
}
function mostrarCont3(){
    var conteudo = document.getElementById('cont3');
    conteudo.classList.toggle('show');
    var imgCont = document.getElementById('imgCont3');
    imgCont.classList.toggle('show');
}
function mostrarCont4(){
    var conteudo = document.getElementById('cont4');
    conteudo.classList.toggle('show');
    var imgCont = document.getElementById('imgCont4');
    imgCont.classList.toggle('show');
}
function mostrarCont5(){
    var conteudo = document.getElementById('cont5');
    conteudo.classList.toggle('show');
    var imgCont = document.getElementById('imgCont5');
    imgCont.classList.toggle('show');
}

/***** CARROSSEL e CONTEÚDO BLOQUEADO *****/
var anterior = document.getElementById("anterior");
var proximo = document.getElementById("proximo");
var imagem = document.getElementById("img-carrossel");
var paragrafo = document.getElementById("paragrafo");
var bullet2 = document.getElementById("bullet2");
var bullet3 = document.getElementById("bullet3");
var bullet4 = document.getElementById("bullet4");
var bullet5 = document.getElementById("bullet5");
var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var block3 = document.getElementById("block3");
var block4 = document.getElementById("block4");
var qtdImagem = new Number(6);
var cont = 1 ;
imagem.src ="img-icon"+cont+".png";

anterior.onclick = function () {
    if(cont > 1){
    imagem.src = "";
    cont--;
    }
    if(cont == 1){
        anterior.src = 'img-seta-esquerda-inativa.png';
        proximo.src = 'img-seta-direita.png';
        imagem.src = "img-icon1.png";
        paragrafo.innerHTML = "Teoria Comportamental: o professor organiza a sala de aula para obter as respostas, ou seja, as mudanças de comportamento que deseja.";
        bullet2.src = 'img-carrossel-inativo.png';
        bullet3.src = 'img-carrossel-inativo.png';
        bullet4.src = 'img-carrossel-inativo.png';
        bullet5.src = 'img-carrossel-inativo.png';
    }if(cont == 2){
        anterior.src = 'img-seta-esquerda.png';
        proximo.src = 'img-seta-direita.png';
        imagem.src = "img-icon2.png";
        paragrafo.innerHTML = "Teoria Cognitivista: o professor trabalha com a estruturação do conhecimento para a aprendizagem, preocupando-se em ensinar a aprender.";
        bullet2.src = 'img-carrossel-ativo.png';
        bullet3.src = 'img-carrossel-inativo.png';
        bullet4.src = 'img-carrossel-inativo.png';
        bullet5.src = 'img-carrossel-inativo.png';
    }if(cont == 3){
        anterior.src = 'img-seta-esquerda.png';
        proximo.src = 'img-seta-direita.png';
        imagem.src = "img-icon3.png";
        paragrafo.innerHTML = "Teoria Socioconstrutivista: o professor procura estabelecer comunidades de prática com interação deliberada entre as pessoas que aprendem, ou seja, promovem a socialização.";
        bullet2.src = 'img-carrossel-ativo.png';
        bullet3.src = 'img-carrossel-ativo.png';
        bullet4.src = 'img-carrossel-inativo.png';
        bullet5.src = 'img-carrossel-inativo.png';
    }if(cont == 4){
        anterior.src = 'img-seta-esquerda.png';
        proximo.src = 'img-seta-direita.png';
        imagem.src = "img-icon4.png";
        paragrafo.innerHTML = "Teoria Humanista: cabe ao professor facilitar e mediar o desenvolvimento holístico.";
        bullet2.src = 'img-carrossel-ativo.png';
        bullet3.src = 'img-carrossel-ativo.png';
        bullet4.src = 'img-carrossel-ativo.png';
        bullet5.src = 'img-carrossel-inativo.png';
    }if(cont == 5){
        anterior.src = 'img-seta-esquerda.png';
        proximo.src = 'img-seta-direita-inativa.png';
        imagem.src = "img-icon5.png";
        paragrafo.innerHTML = "Teoria Conectivista: o professor busca possibilitar que seus alunos tomem decisões diante do que aprender, quando aprender e onde buscar conhecimento, especialmente, através de tecnologias digitais.";
        bullet2.src = 'img-carrossel-ativo.png';
        bullet3.src = 'img-carrossel-ativo.png';
        bullet4.src = 'img-carrossel-ativo.png';
        bullet5.src = 'img-carrossel-ativo.png';
        block1.classList.toggle('show');
        block2.classList.toggle('show');
        block3.classList.toggle('show');
        block4.classList.toggle('show');
    }
};
proximo.onclick = function () {
    if(cont < (qtdImagem - 1)  ){
        imagem.src ="";
        cont++;
    }
    if(cont == 1){
        anterior.src = 'img-seta-esquerda-inativa.png';
        proximo.src = 'img-seta-direita.png';
        imagem.src = "img-icon1.png";
        paragrafo.innerHTML = "Teoria Comportamental: o professor organiza a sala de aula para obter as respostas, ou seja, as mudanças de comportamento que deseja.";
        bullet2.src = 'img-carrossel-inativo.png';
        bullet3.src = 'img-carrossel-inativo.png';
        bullet4.src = 'img-carrossel-inativo.png';
        bullet5.src = 'img-carrossel-inativo.png';
    }if(cont == 2){
        anterior.src = 'img-seta-esquerda.png';
        proximo.src = 'img-seta-direita.png';
        imagem.src = "img-icon2.png";
        paragrafo.innerHTML = "Teoria Cognitivista: o professor trabalha com a estruturação do conhecimento para a aprendizagem, preocupando-se em ensinar a aprender.";
        bullet2.src = 'img-carrossel-ativo.png';
        bullet3.src = 'img-carrossel-inativo.png';
        bullet4.src = 'img-carrossel-inativo.png';
        bullet5.src = 'img-carrossel-inativo.png';
    }if(cont == 3){
        anterior.src = 'img-seta-esquerda.png';
        proximo.src = 'img-seta-direita.png';
        imagem.src = "img-icon3.png";
        paragrafo.innerHTML = "Teoria Socioconstrutivista: o professor procura estabelecer comunidades de prática com interação deliberada entre as pessoas que aprendem, ou seja, promovem a socialização.";
        bullet2.src = 'img-carrossel-ativo.png';
        bullet3.src = 'img-carrossel-ativo.png';
        bullet4.src = 'img-carrossel-inativo.png';
        bullet5.src = 'img-carrossel-inativo.png';
    }if(cont == 4){
        anterior.src = 'img-seta-esquerda.png';
        proximo.src = 'img-seta-direita.png';
        imagem.src = "img-icon4.png";
        paragrafo.innerHTML = "Teoria Humanista: cabe ao professor facilitar e mediar o desenvolvimento holístico.";
        bullet2.src = 'img-carrossel-ativo.png';
        bullet3.src = 'img-carrossel-ativo.png';
        bullet4.src = 'img-carrossel-ativo.png';
        bullet5.src = 'img-carrossel-inativo.png';
    }if(cont == 5){
        anterior.src = 'img-seta-esquerda.png';
        proximo.src = 'img-seta-direita-inativa.png';
        imagem.src = "img-icon5.png";
        paragrafo.innerHTML = "Teoria Conectivista: o professor busca possibilitar que seus alunos tomem decisões diante do que aprender, quando aprender e onde buscar conhecimento, especialmente, através de tecnologias digitais.";
        bullet2.src = 'img-carrossel-ativo.png';
        bullet3.src = 'img-carrossel-ativo.png';
        bullet4.src = 'img-carrossel-ativo.png';
        bullet5.src = 'img-carrossel-ativo.png';
        block1.classList.toggle('show');
        block2.classList.toggle('show');
        block3.classList.toggle('show');
        block4.classList.toggle('show');
    }
};