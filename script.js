let table = ['Adam', 'Tomek', 'Krzysiek', 'Paweł'];

for (let key in table) {
    console.log(key, table[key]);
}

for (let value of table) {
    console.log(value);
}

const name = 'Kazachstan';

for (let character of name) {
    console.log(character);
}

const obj = {
    name: 'Adam',
    country: 'Poland'
};

for (let key in obj) {
    console.log(key, obj[key]);
}

// doesn't work on objects
for (let key of obj) {
    console.log(key);
}
