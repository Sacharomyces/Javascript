var myObj ={
a: 2
};
var prop = Object.getOwnPropertyDescriptor(myObj,"a");
console.log(prop);

Object.defineProperty(myObj,"b",{
    value:3,
    writable:true, // nie można modyfikować wartości
    configurable: true, // nie można zmieniać konfiguracji desktyptora wlasciwosci
    enumerable:true // 
});

console.log(myObj);