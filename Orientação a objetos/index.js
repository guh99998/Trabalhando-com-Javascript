class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) 
    {
        if (this.saldo >= valor) 
        {
            this.saldo -= valor;
            console.log("Novo saldo:", this.saldo);
        } else 
        {
            console.log("Saldo insuficiente para sacar");
        }
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Gustavo";
cliente1.cpf = 12345678911;

cliente2.nome = "Cintia";
cliente2.cpf = 150354897510;


const contaCorrenteGustavo = new ContaCorrente();
contaCorrenteGustavo.agencia = 1001;
contaCorrenteGustavo.saldo = 0;
console.log(contaCorrenteGustavo.saldo);
contaCorrenteGustavo.saldo = 100;
console.log(contaCorrenteGustavo.saldo);

contaCorrenteGustavo.sacar(100);

console.log(cliente1);
console.log(cliente2);