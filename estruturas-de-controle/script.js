const time = 9;

if (time < 12) {
    console.log('Bom dia.');
} else if (time < 18) {
    console.log("Boa tarde.");
} else {
    console.log("Boa noite.");
}

const week = 3;
switch (week) {
    case 1: console.log("Domingo"); break;
    case 2: console.log("Segunda"); break;
    case 3: console.log("Terça"); break;
    case 4: console.log("Quarta"); break;
    case 5: console.log("Quinta"); break;
    case 6: console.log("Sexta"); break;
    case 7: console.log("Sábado"); break;
    default: console.log("Valor inválido");
}

let count = 1;
while(count < 10) {
    console.log(`count = ${count}`);
    count++;
}

for (let i = 0; i < 5; i++) {
    console.log(`i = ${i}`);
}

let teste = 1;
do {
    console.log(`a contagem está em: ${teste}`);
    teste++;
} while (teste <= 10);

