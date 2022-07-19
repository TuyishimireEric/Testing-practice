class calc {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add () {
        return this.a + this.b;
    }
    sub () {
        return this.a - this.b;
    }
    multi () {
        return this.a * this.b;
    }
    div () {
        return this.a / this.b;
    }
}
const numbers = new calc(2, 3);

module.exports = calc;