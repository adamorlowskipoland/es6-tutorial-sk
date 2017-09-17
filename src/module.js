const string = 'ok ok ok OK';
const pattern = /ok/g;
console.log(pattern.exec(string));
console.log(pattern.lastIndex);
console.log(pattern.exec(string));
console.log(pattern.lastIndex);
console.log(pattern.exec(string));
console.log(pattern.lastIndex);

const patterny = /ok/y; // sticky
console.log(patterny.exec(string));
console.log(patterny.lastIndex);
console.log(patterny.exec(string));
console.log(patterny.lastIndex);
console.log(patterny.exec(string));
console.log(patterny.lastIndex);
