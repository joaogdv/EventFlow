import * as leitor from "readline-sync";

class Palestrante {
    nome: string;
    especialidade: string;

    constructor(nome: string, especialidade: string) {
        this.nome = nome;
        this.especialidade = especialidade;
    }
}

class Evento {
    nome: string;
    data: string;
    local: string;
    palestrantes: Palestrante[];
    participantes: number;

    constructor(nome: string, data: string, local: string) {
        this.nome = nome;
        this.data = data;
        this.local = local;
        this.palestrantes = [];
        this.participantes = 0;
    }

    adicionarPalestrante(palestrante: Palestrante): void {
        this.palestrantes.push(palestrante);
    }

    registrarParticipante(): void {
        this.participantes++;
    }

    mostrarDetalhes(): void {
        console.log(`Evento: ${this.nome}`);
        console.log(`Data: ${this.data}`);
        console.log(`Local: ${this.local}`);
        console.log(`Palestrantes:`);
        this.palestrantes.forEach((palestrante) => {
            console.log(`- ${palestrante.nome}, Especialidade: ${palestrante.especialidade}`);
        });
        console.log(`Participantes confirmados: ${this.participantes}`);
    }
}

const eventos: Evento[] = [];

let menu: boolean = true;

while (menu) {
    let option = parseInt(leitor.question("Selecione uma opção:\n1 - Ver eventos disponíveis\n2 - Adicionar novo evento\n3 - Registrar participante em um evento\n4 - Sair\n:"));

    switch (option) {
        case 1:
            if (eventos.length === 0) {
                console.log('Não há eventos disponíveis no momento.');
            } else {
                console.log('Eventos disponíveis:');
                eventos.forEach((evento, index) => {
                    console.log(`${index + 1}. ${evento.nome} - ${evento.data}`);
                });
                let selectedEvent = parseInt(leitor.question('Escolha um evento para ver detalhes: '));
                if (selectedEvent > 0 && selectedEvent <= eventos.length) {
                    eventos[selectedEvent - 1].mostrarDetalhes();
                } else {
                    console.log('Opção inválida.');
                }
            }
            break;
        case 2:
            const novoNome = leitor.question('Digite o nome do novo evento: ');
            const novaData = leitor.question('Digite a data do novo evento: ');
            const novoLocal = leitor.question('Digite o local do novo evento: ');
            eventos.push(new Evento(novoNome, novaData, novoLocal));
            console.log("Novo evento adicionado com sucesso!");
            break;
        case 3:
            if (eventos.length === 0) {
                console.log('Não há eventos disponíveis para registro.');
            } else {
                eventos.forEach((evento, index) => {
                    console.log(`${index + 1}. ${evento.nome} - ${evento.data}`);
                });
                let eventoSelecionado = parseInt(leitor.question('Escolha um evento para registrar participante: '));
                if (eventoSelecionado > 0 && eventoSelecionado <= eventos.length) {
                    eventos[eventoSelecionado - 1].registrarParticipante();
                    console.log('Participante registrado com sucesso!');
                } else {
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
