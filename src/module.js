const myString = '\u0041';
const myString1 = '\u0040\u260e\u2764';
console.log(myString);
console.log(myString1);
console.log(myString1.length);

for (const c of myString1) {
    console.log(c);
}
