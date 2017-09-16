let x = {};
let handler = {
    get: function (obj, key) {
        return `Wartość klucza ${obj[key]} ${key}`;
    }
};

let p = new Proxy(x, handler);

p.id = 345;
console.log(p.id);
console.log(x.id);

