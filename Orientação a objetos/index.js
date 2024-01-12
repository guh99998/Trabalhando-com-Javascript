class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo;

    sacar(valor) 
    {
        if (this._saldo >= valor) 
        {
            this._saldo -= valor;
            console.log("Novo saldo:", this._saldo);
        } else 
        {
            console.log("Saldo insuficiente para sacar");
        }
    }

    depositar(valor)
    {
        if (valor > 0)
        {
            this._saldo += valor;
            console.log("Novo saldo:", this._saldo);
        } else
        {
            console.log("Não é possível depositar um valor menor que 0");
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
contaCorrenteGustavo._saldo = 0;

contaCorrenteGustavo.depositar(2000);


console.log(cliente1);
console.log(cliente2);