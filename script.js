let m = new Map();

m.set(1, 'React');
m.set(0, 'Zero');
m.set(2, 'Angular');
m.set(3, 'Ember');
m.set(4, 'Babel');

console.log(m);

for (const v of m) {
    console.log(v);
}

// m.clear();

console.log(m.size);
m.delete(0);
const r = m.get(1);
console.log(r);
