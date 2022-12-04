
//Alterado o Titulo
var titulo = document.querySelector(".titulo");
titulo.textContent = "Acne System";

//Busca do Dom(Documento HTML) para alteração.
var pacientes = document.querySelectorAll(".paciente");

//FOR para repetição
for (var i = 0; i < pacientes.length; i++) {

    //Declaracao de variavel para paciente
    var paciente = pacientes[i];

    //Busca Peso
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    //Busca Altura
    var tdaltura = paciente.querySelector(".info-altura")
    var altura = tdaltura.textContent;


    var tdImc = paciente.querySelector(".info-imc");
    var pesoEValido = true;
    var alturaEValida = true;


    //Validador de altura
    if (peso <= 0 || peso >= 300) {
        console.log("Peso inválido!");
        pesoEValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");

    }

    if (altura <= 0 || altura >= 2.50) {
        console.log("Altura inválida!");
        alturaEValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    //calculo IMC
    if (alturaEValida && pesoEValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

//Função Anonima
botaoAdicionar.addEventListener("click", function () {
    event.preventDefault();

    //Seleciona o Form
    var form = document.querySelector("#form-adiciona");

    //Pegando o valor digitado
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //Criando a Tabela
    var pacienteTr = document.createElement("tr");

    //Adicionando campos na tabela.
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //Imprimindo o valor digitado
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //Declarando que o TR e Pai do TD
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    //Declarando selecioando o Tbody
    var tabela = document.querySelector("#tabela-pacientes");
    
    //Declarando que Tbody e Pai da tabela
    tabela.appendChild(pacienteTr);



    //alert("Cliente adicionado com sucesso")
    });



