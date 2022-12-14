
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


    //Validador de Peso
    if (peso <= 0 || peso >= 300) {
        console.log("Peso inválido!");
        pesoEValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");

    }
    //Validador de altura
    if (altura <= 0 || altura >= 2.50) {
        console.log("Altura inválida!");
        alturaEValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    //calculo IMC
    if (alturaEValida && pesoEValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

}

function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);

}


