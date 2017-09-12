//  without a 'new'
let s1 = Symbol('Logowanie');
let s2 = Symbol('Logowanie');

//  Symbols are always unique
console.log(s1 === s2);
// kinda like objects
console.log({} === {});

let person = {
    name: 'Pawel',
    age: 40,
    city: 'Warsaw'
};

let s = Symbol();
person[s] = '1376';

for (let i in person) {
    // this will show in console only properties, without symbol
    console.log(i, person[i]);
}

console.log(person);

// to console log symbol from object you need to do as follow
console.log(person[s]);
console.log(Object.getOwnPropertySymbols(person));
