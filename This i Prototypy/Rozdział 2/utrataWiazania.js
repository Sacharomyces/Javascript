function foo(){
    console.log(this.a);
}

function doFn(fn){
    var a = "dofn";
    fn();
}

var a = "global";
var obj = {
 a : "objfn",
 foo: foo
}

doFn(obj.foo);