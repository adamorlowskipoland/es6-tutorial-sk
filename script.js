// this won't work, wrong 'this' usage
function Counter() {
    this.count = 0;
    setTimeout(function() {
        this.count++;
        console.log(this.count);
    }, 1)
}
let a = new Counter();


// this way will help to fire function correctly but it's a bad practice, you can do better then this
function Counter1() {
    let that = this;
    this.count = 0;
    setTimeout(function() {
        that.count++;
        console.log(that.count);
    }, 1)
}
let b = new Counter1();


// this will work, you bind 'this' in the wanted context
function Counter2() {
    this.count = 0;
    setTimeout(function() {
        this.count++;
        console.log(this.count);
    }.bind(this), 1)
}
let c = new Counter2();



// correct usage of arrow function which uses the same 'this' context
function Counter3() {
    this.count = 0;
    setTimeout(() => {
        this.count++;
        console.log(this.count);
    }, 1)
}

let d = new Counter3();

