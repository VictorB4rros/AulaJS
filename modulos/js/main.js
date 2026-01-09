import { sum } from './numbers.js';
import * as nb from './numbers.js';
import Product from './product.js';

console.log(sum(3, 4));
console.log(nb.exp(3, 4));

const obj = new Product('Computador', 800.0, 10);

console.log(obj);