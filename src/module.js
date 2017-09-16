//  RULES
//  Uint8Array - Unside intiger 8 length type Array
//  ignors after dot; bigger then 8 translate to smaller by own algorythm, strings are translated to numbers
const typedArr = new Uint8Array([-1, 0, 1, 2, 3, 4.333, 5.343, 9, '0', 30000]);
console.log(typedArr);
console.log(typedArr.length);

for (const b of typedArr) {
    console.log(b);
}

const typedArr1= new Float32Array([-1, 0, 1, 2, 3, 4.333, 5.343, 9, '0', 30000]);
console.log(typedArr1);

