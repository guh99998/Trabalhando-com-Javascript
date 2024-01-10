class Cliente
{
    nome;
    cpf;
}

class ContaCorrente
{
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Gustavo";
cliente1.cpf = 12345678911;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Cintia";
cliente2.cpf = 150354897510;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1);
console.log(cliente2);