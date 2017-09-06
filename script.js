let person = {
    name: 'Thomas',
    age: 30,
    city: 'Kraków'
};

// let {name, age, city} = person;
// console.log(name, age, city);

let {name: n, age: a, city: c = 'Warszawa'} = person;
console.log(n, a, c);

