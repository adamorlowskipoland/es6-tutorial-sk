async function wait3sec(string) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(string);
        }, 3000);
    })
}

async function run() {
    return await wait3sec('Header');
}

run()
    .then(res => {
        console.log(res);
    });
