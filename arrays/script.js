const valores = [1, 2, 3];
const t1 = valores.length;

console.log(`Tamanho do array: ${t1}`);

const nomes = ["Maria", "João", "Ana", "Marcos"];
// pop remove o último elemento do array e retorna esse elemento para a variável
// shift remove o primeiro elemento do array e o retorna para a variável
const r1 = nomes.pop();
const r2 = nomes.shift();

console.log(`Teste pop: ${r1}`);
console.log(`Teste shift: ${r2}`);
console.log(nomes);

// Inserir elementos push insere no final e unshift insere no começo do array
const alturas = [1.65, 1.82, 1.7];
alturas.push(1.75);
alturas.unshift(1.58);
console.log("Teste push e unshift: ");
console.log(alturas);

// inserir e remover em qualquer lugar
const letras = ["A", "B", "C", "D", "E", "F"];
letras.splice(2, 0, "X", "Y");
console.log("Teste splice:");
console.log(letras);


// concatenar arrays

const meninas = ["Maria", "Ana"];
const meninos = ["João", "Marcos"];
const todos = meninas.concat(meninos);
console.log("Teste concat:");
console.log(todos);

// Acesso e atribuição

const idades = [20, 30, 40, 50];
idades[1] = 35;
console.log("Teste acesso e atribuição:");
console.log(idades);

// percorrer um array
const comidas = ["pizza", "hamburguer", "esfiha"];

console.log("Teste percorrer array:");
for (let i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);
}

// percorrer array com for each
// o nome 'elemento' pode ser qualquer um, você escolhe
// para cada 'elemento' do array comidas, fazer tal coisa
// função lambda ou função de primeira ordem (função que recebe outra função como argumento)

comidas.forEach(elemento => {
    console.log(elemento);
});