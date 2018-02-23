
function foo() {
    var a = 2;

    function bar() {
        console.log(a);
    }
     var foo2 = bar;
}
foo();

foo2();