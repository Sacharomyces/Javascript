console.log("wiazanie jawne")

function foo() {
    console.log(this.a);
}

obj1 = {
    a: 5
}

foo.call(obj1);