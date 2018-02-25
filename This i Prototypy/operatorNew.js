console.log("operatorNew");

function foo(a) {
    this.kil = a;
}
var a = foo(5);
var b = new foo(4);
console.log(b.kil)

// operatro new i argumenty
function foo1(p1, p2) {
    this.val = p1 + p2;
}
var bar1 = foo1.bind(null, "p1"); //. p1 is hard binded argument and cannot be overriden
var baz1 = new bar1("c1", "c2");
console.log(bar1.val);
console.log(baz1.val); 
