let color = {
    name: 'blue',
    hex: '#0000ff'
};

Reflect.deleteProperty(color, 'hex');
console.log(color);

let property = Object.defineProperty(color, 'class', {value: 'basic'});
console.log(property);
let prop = Reflect.defineProperty(color, 'class', {value: 'basic'});
console.log(prop);
