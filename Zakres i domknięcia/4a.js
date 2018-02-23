function foo() {
    function bar(a) {
        i = 3;
        console.log(a);
    }
    for (var i = 0; i < 10; i++) {
        bar(i);
    }
}
foo();