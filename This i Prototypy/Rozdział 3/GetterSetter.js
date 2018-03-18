//deskryptor akcesora nie przechowuje danych (value) a zwraca wartość z funckji get

//Dwa sposoby definiowania :

var myObject = {
    get a() {
        return this._a_;
    },
    set a(value) {
        this._a_ = value;
    }
};

//drugi:
Object.defineProperty(myObject, "b", {
    get: function () { return this._b_; },
    set: function (value) { this._b_ = value; },
    enumerable: true
});

myObject.b = 4;
console.log(myObject.b);