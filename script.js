let p1 = new Promise((resolve, reject) => {
    resolve('OK1');
});
let p2 = new Promise((resolve, reject) => {
    resolve('OK2');
});

let p3 = new Promise((resolve, reject) => {
    // resolve('OK3');
    reject('Błąd3');
});

// all Promises needs to be resolved for this to work

Promise.all([p1, p2, p3])
    .then(results => {
        console.log(results);
    })
    .catch(err => {
       console.log(err);
    });

