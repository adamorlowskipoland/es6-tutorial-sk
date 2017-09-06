// function setOptions(options) {
//     const env = options.env;
//     const db = options.db;
//     return [env, db];
// }

function setOptions({env = 'DEV', db}) {        // this way it is more clear that you need to give object with 2 keys
    return [env, db];
}


let opt = setOptions({env: 'DEV', db: 'SQLite'});
console.log(opt);
