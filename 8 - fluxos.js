console.log(`\nTrabalhando com fluxos\n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada);

let contador = 0;
let destinoExiste = false;

while (contador < 3)
{
    if (listaDeDestinos[contador] == destino)
    {
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }

    contador++;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste)
{
    console.log("Boa viagem!");
} else
{
    console.log("Desculpe, tivemos um erro.")
}

for(let cont = 0; cont < 3; cont++)
{
    if (listaDeDestinos[cont] == destino)
    {
        destinoExiste = true;
    }
}