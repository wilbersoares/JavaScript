var titulo = document.querySelector(".titulo");
titulo.textContent = "Acne System";

//Busca do Dom(Documento HTML)
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){

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
}

if (altura <= 0 || altura >= 2.50) {
    console.log("Altura inválida!");
    alturaEValida = false;
    tdImc.textContent = "Altura inválida!";
}

//calculo IMC
if (alturaEValida && pesoEValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed();
}
    
}



