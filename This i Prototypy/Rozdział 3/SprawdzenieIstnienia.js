//sprawdzanie istnienia właściwości

var myObj = {
    a: 1
}
// "in" sprawdza obecność w obiekcie i w łacuchu prototype
var isAExist = ("a" in myObj);
var isBExist = ("b" in myObj);

console.log(isAExist);//true
console.log(isBExist);//false

//hasOwnProperty sprawdza tylko obiekt
isAExist = myObj.hasOwnProperty("a");
isBExist = myObj.hasOwnProperty("b");

console.log(isAExist);
console.log(isBExist);


