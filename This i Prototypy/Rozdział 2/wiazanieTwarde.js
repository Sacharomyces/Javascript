console.log("wiązanie twarde")


function foo( something) 
{ console.log( this.a, something ); 
    return this.a + something; 
} 
var obj = { a: 2 }; 

function bind1( fn, obj) 
{ return function() 
    { return fn.apply( obj, arguments ); }
}

var bar = bind1(foo,obj); 
var bar2 = foo.bind(obj);
var b = bar( 3 ); // 2 3 
var b2 = bar(4)
console.log( b ); // 5
console.log( b2 ); // 6

