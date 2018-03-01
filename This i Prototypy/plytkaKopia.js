var foo = function() {
    consol.log("hello");
}

var myObj = {
    first: 1,
    second: 2,
    third: 3,
    obj: {a:3, b:4},
    foo: foo
}

var newObj = Object.assign({},myObj);
console.log(newObj);

newObj.obj.a = 4;

console.log(newObj.obj.a) // referencja do myObj.obj.a a nie kopia obiektu
console.log(myObj.obj.a) 