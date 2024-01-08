console.log(`\nTrabalhando com fluxos\n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Monte Sião";

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