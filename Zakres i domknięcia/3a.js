function foo(str, a) {
    eval(str);
    console.log(a, b);
}
var b = 4;

foo("var b=2;", 1);
