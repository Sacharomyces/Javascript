function first() {
    console.log(this.a)
}
var obj1 = {
    a: 7,
    ber: first
}
var bera = obj1.ber;
var a = "global";
bera();



// drugi przyklad

function second() {
    console.log(this.a)
}

function pass(fn) {
    fn();
}
var obj2 = {
    a: 7,
    second: second
}

var a = "global";
pass(obj2.second);



