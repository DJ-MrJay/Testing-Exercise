class Calculator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add() {
        let sum = this.x + this.y;
        return sum;
    }

    subtract() {
        let sub = this.x - this.y;
        return sub;
    }

    multiply() {
        let product = this.x * this.y;
        return product;
    }

    divide() {
        let div = this.x / this.y;
        return div;
    }
}

module.exports = Calculator;