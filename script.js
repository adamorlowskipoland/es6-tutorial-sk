let product = {
    id: 293,
    showId: function() {
        return this.id;
    }
};

let product2 = {
    id: 293,
    showId: () => this.id   // undefined ; wrong usage of 'this' context
};

console.log(product.showId());
console.log(product2.showId());

let product3 = () => 1;
console.log(product3());

// if you want to return object you need to use brackets otherwise
// { what is inside of curly brackets } will be interpreted as a function syntax
let product4 = () => ({ id: 12345});
console.log(product4());

let Product = () => {};     // arrow functions won't work as a constructor
let P = new Product();
