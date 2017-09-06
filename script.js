let array = [10, 20, 30, 40, 50];

let sum = array.reduce(function (a, b) {
    return a + b;
});

let sum2 = array.reduce((a, b) => a + b);

console.log(sum);
console.log(sum2);
