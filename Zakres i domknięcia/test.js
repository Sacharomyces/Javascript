var a = 4;
function foo(){
    var a = 4;
    console.log(this.a);
}
foo();