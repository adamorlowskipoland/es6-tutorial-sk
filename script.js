function *cities() {
    yield 'Warsaw';
    yield 'Wroclaw';
    yield 'Poznan';
}

let places = cities();

for (let city of places) {
    console.log(city);
}
