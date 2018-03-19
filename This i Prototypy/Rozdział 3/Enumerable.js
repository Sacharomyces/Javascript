//sprawdzenie obecności w typach wyliczeniowych
var myObj = {
    a: 1,
};
Object.defineProperty(myObj, "b", { enumerable: false, value: 2 });

var isBExist = ("b" in myObj);// true
myObj.propertyIsEnumerable("b");// false

for (var prop in myObj) {
    console.log(prop, myObj[prop]);// a 1
}
// b jest widoczne dla "in" przy wyszukiwaniu właściwości po nazwie, ale nie jest przy iterowaniu pętlą "for in"

//zwraca tablise właściwości widocznych w typach wyliczeniowych (tylko dla obiektu)
Object.keys(myObj); // ["a"] 

//zwraca wszystkie własiwości obiektu (tylko dla obiektu)
Object.getOwnPropertyNames(myObj); // ["a", "b"]
