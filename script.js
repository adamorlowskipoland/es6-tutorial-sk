let m = new WeakMap();

let object1 = {id: 1};
let object2 = {id: 2};
let object3 = {id: 3};
// m.set(1, 'React');   // this is how you set Map
m.set(object1, 'React');    // in WeakMap you need to set an Object
m.set(object2, 'Ember');
m.set(object3, 'Angular');
console.log(m);

// object3 = null;  // this deletes all references

console.log(m.get(object3));

for (const v of m) {
    console.log(v);
}
