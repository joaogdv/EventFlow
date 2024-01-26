"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var Palestrante = /** @class */ (function () {
    function Palestrante(nome, especialidade) {
        this.nome = nome;
        this.especialidade = especialidade;
    }
    return Palestrante;
}());
var Evento = /** @class */ (function () {
    function Evento(nome, data, local) {
        this.nome = nome;
        this.data = data;
        this.local = local;
        this.palestrantes = [];
        this.participantes = 0;
    }
    Evento.prototype.adicionarPalestrante = function (palestrante) {
        this.palestrantes.push(palestrante);
    };
    Evento.prototype.registrarParticipante = function () {
        this.participantes++;
    };
    Evento.prototype.mostrarDetalhes = function () {
        console.log("Evento: ".concat(this.nome));
        console.log("Data: ".concat(this.data));
        console.log("Local: ".concat(this.local));
        console.log("Palestrantes:");
        this.palestrantes.forEach(function (palestrante) {
            console.log("- ".concat(palestrante.nome, ", Especialidade: ").concat(palestrante.especialidade));
        });
        console.log("Participantes confirmados: ".concat(this.participantes));
    };
    return Evento;
}());
var eventos = [];
var menu = true;
while (menu) {
    var option = leitor.questionInt("Selecione uma opção:\n1 - Ver eventos disponíveis\n2 - Adicionar novo evento\n3 - Registrar participante em um evento\n4 - Sair\n:");
    switch (option) {
        case 1:
            if (eventos.length === 0) {
                console.log('Não há eventos disponíveis no momento.');
            }
            else {
                console.log('Eventos disponíveis:');
                eventos.forEach(function (evento, index) {
                    console.log("".concat(index + 1, ". ").concat(evento.nome, " - ").concat(evento.data));
                });
                var selectedEvent = leitor.questionInt('Escolha um evento para ver detalhes: ');
                if (selectedEvent >= 1 && selectedEvent <= eventos.length) {
                    eventos[selectedEvent - 1].mostrarDetalhes();
                }
                else {
                    console.log('Opção inválida.');
                }
            }
            break;
        case 2:
            var novoNome = leitor.question('Digite o nome do novo evento: ');
            var novaData = leitor.question('Digite a data do novo evento: ');
            var novoLocal = leitor.question('Digite o local do novo evento: ');
            eventos.push(new Evento(novoNome, novaData, novoLocal));
            console.log("Novo evento adicionado com sucesso!");
            break;
        case 3:
            if (eventos.length === 0) {
                console.log('Não há eventos disponíveis para registro.');
            }
            else {
                eventos.forEach(function (evento, index) {
                    console.log("".concat(index + 1, ". ").concat(evento.nome, " - ").concat(evento.data));
                });
                var eventoSelecionado = leitor.questionInt('Escolha um evento para registrar participante: ');
                if (eventoSelecionado >= 1 && eventoSelecionado <= eventos.length) {
                    eventos[eventoSelecionado - 1].registrarParticipante();
                    console.log('Participante registrado com sucesso!');
                }
                else {
                    console.log('Opção inválida.');
                }
            }
            break;
        case 4:
            console.log("Saindo do sistema");
            menu = false;
            break;
        default:
            console.log("Opção inválida.");
    }
}
