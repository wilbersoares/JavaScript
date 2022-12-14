var botaoAdicionar = document.querySelector("#adicionar-paciente");

//Função Anonima
botaoAdicionar.addEventListener("click", function () {
    event.preventDefault();

    //Seleciona o Form
    var form = document.querySelector("#form-adiciona");

    //Pegando o valor digitado no form
    var paciente = obtemPacientesDoFormulario(form);

    //Criando a Tabela
    var pacienteTr = MontaTr(paciente);

    //Declarando selecioando o Tbody
    var tabela = document.querySelector("#tabela-pacientes");

    //Declarando que Tbody e Pai da tabela
    tabela.appendChild(pacienteTr);

    form.reset();

    //alert("Cliente adicionado com sucesso")
});

function obtemPacientesDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function MontaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Declarando que o TR e Pai do TD
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("Td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}