//  es5 way
function getPerson(name, age) {
    return {
        name: name,
        age: age,
        checkAge: function () {
            if (this.age >= 18) {
                return true
            } else {
                return false;
            }
        }
    };
}

//  es6 way
function getPerson1(name, age) {
    return {
        name,
        age,
        checkAge() {
            return this.age >= 18;
        },
        //  creating dynamic content
        [`user${name}${age}`]: 'OK'
    };
}

let p = getPerson('Tomek', 30);
console.log(p);
console.log(p.checkAge());

let p1 = getPerson1('Thomas', 31);
console.log(p1);
console.log(p1.checkAge());
console.log(p1.userThomas31);


