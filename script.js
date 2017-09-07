let set = new Set();

// values must be unique
set.add(10);
set.add(20);
set.add('OK');
set.add(true);
set.add({});
set.add({});

console.log(set);
set.delete(10);
console.log(set.has(10));

for (let v of set) {
    console.log(v);
}
