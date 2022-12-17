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

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagemDeErro(erros);
            return;
        }


    //Declarando selecioando o Tbody
    var tabela = document.querySelector("#tabela-pacientes");

    //Declarando que Tbody e Pai da tabela
    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erros");
    mensagensErro.innerHTML = "";

    //alert("Cliente adicionado com sucesso")
});

function exibeMensagemDeErro(erros) {
    var ul = document.querySelector("#mensagens-erros");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacientesDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    };
    return paciente;
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

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O Nome não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push(" Peso é inválido! ");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push(" Altura é inválida! ");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A Gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
      erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
      erros.push("A altura não pode ser em branco");
    }


    return erros;
}