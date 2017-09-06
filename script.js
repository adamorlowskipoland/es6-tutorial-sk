let sumValues = function (a, b) {
    return a + b;
};

let sumValues2 = (a, b) => {
    return a + b;
};

let sumValues3 = (a, b) => a + b;       // return in the same line - use for simple functions

let showValue = a => a;       // no need to use () while using only one parameter

console.log(sumValues(3, 5));
console.log(sumValues2(3, 5));
console.log(sumValues3(3, 5));
console.log(showValue(8));
