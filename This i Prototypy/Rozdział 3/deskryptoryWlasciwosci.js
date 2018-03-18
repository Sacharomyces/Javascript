var myObj = {
    a: 2
};
var prop = Object.getOwnPropertyDescriptor(myObj, "a"); // pelna konfiguracja deskryptora
console.log(prop);

//deskryptor danych przechowuje wartość
Object.defineProperty(myObj, "b", {
    value: 3,
    writable: true, // nie można modyfikować wartości
    configurable: true, // nie można zmieniać konfiguracji desktyptora wlasciwosci
    enumerable: true // widoczność w typach wyliczeniowych
});

console.log(myObj);


