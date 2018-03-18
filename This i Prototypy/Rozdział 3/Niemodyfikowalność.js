
//Stała obiektu:
Object.defineProperty(myObj, "b", {
    value: 3,
    writable: false,
    configurable: false,
    enumerable: true
});

// Prevent obiect extensions:
Object.preventExtensions(myObj);
myObj.b = 3; // silent error , in strict mode TypeError
myObj.b;// undefined

//Seal object

Object.seal(myObj); // preventExtensions + configurable: false for all

//Freeze object

Object.freeze(myObj); // seal + writable: false for all