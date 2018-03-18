var a = 4;

function source() {
    var a = 3;
    foo();
}

function foo() {
    console.log(this.a);
}
source();

