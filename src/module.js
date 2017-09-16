class ArrayWithId extends Array {
    constructor(id) {
        super();
        this.id = id;
    }
    updateId(id) {
        this.id = id;
    }
}

let arr = new ArrayWithId(32);
arr.push('a');
arr.push('b');
arr.push('c');
arr.push('d');
console.log(arr);
console.log(arr.length);
arr.updateId(31);
console.log(arr);
