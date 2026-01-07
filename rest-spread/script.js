// REST: valores passados com virgula => array

function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

const result1 = sum(1, 2, 3, 4);

console.log(result1);

const result2 = Math.max(2, 5, 9, 3);

console.log(result2);

// SPREAD: array => valores separados por vírgula

const myNumbers = [2, 3, 10, 5];

const result3 = Math.max(...myNumbers);

console.log(result3);

// SPREAD: objeto => valores separados por vírgulas

const item = {
    description: "Computador",
    price: 3000.0,
    quantity: 1
}

// Dessa forma aqui, obj não é um objeto diferente, é apenas
// uma referência que aponta para o mesmo objeto original
const obj = item;

// Dessa forma, cloneItem é um objeto diferente, um clone do objeto item
const cloneItem = { ...item };

// Aqui, cloneItemPlus é uma cópia do objeto item e ainda
// tem um atributo a mais que é weight
const cloneItemPlus = { ...item, weight: 10 };