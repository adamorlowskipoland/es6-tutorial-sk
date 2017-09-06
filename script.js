// function sumValues(a, b, c) {
//     return a + b + c;
// }
//
// let values = [3, 2, 7];
//
// console.log(sumValues(...values));

let array1 = [10, 20, 30];
let array2 = [40, 50, 60];
// array1.push(array2);     // this will push whole array into array as one element
array1.push(...array2);     // this puts every elem from array 2 as indyvidual elem intu array1
console.log(array1);
