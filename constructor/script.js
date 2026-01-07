const p1 = {
    name: "Computador",
    price: 3000.0,
    quantity: 2
}

const Product = function(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;

    this.label = function() {
        return "Dados: (funcao interna) " + this.name + ", " + this.price.toFixed(2);
    }
}

Product.prototype.total = function() {
    return this.price * this.quantity;
}

Product.prototype.add = function(amount) {
    this.quantity += amount;
}

Product.prototype.remove = function(amount) {
    if (this.quantity >= amount) {
        this.quantity -= amount;
    }
}

Product.prototype.label = function() {
    return "Dados: " + this.name + ", " + this.price.toFixed(2);
}

const p2 = new Product("Monitor", 800.0, 10);

const p3 = new Product("Mouse", 300.0, 4);

// Se há um membro no objeto com o mesmo nome de um membro do prototype
// a prioridade vai ser sempre do membro interno do objeto,
// mas há como chamar o membro do prototype também

console.log(p2.label());
console.log(Product.prototype.label.call(p2));