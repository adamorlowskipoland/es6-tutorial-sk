const obj = {
    name: 'Tomek',
    age: '40'
};

// const objClone = Object.assign(obj);

const objClone = Object.assign(obj, {id: 345});
console.log(objClone, obj);

objClone.city = 'Warsaw';
console.log(objClone, obj);

