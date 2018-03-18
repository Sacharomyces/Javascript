function ber() {
    console.log(this.a)
}
var obj = {
    a: 7,
    b: 5,
    ber: ber
}

obj.ber();