let s = new WeakSet();

// s.add(1);  // in WeakSet you can use only Objects

let obj1 = {name: 'Header'};
let obj2 = {name: 'Main'};
let obj3 = {name: 'Footer'};
s.add(obj1);
s.add(obj2);
s.add(obj3);

console.log(s);
console.log(s.delete(obj1));
console.log(s.has(obj1));

// you can't check WeakSet's length, so you can not iterate through it
