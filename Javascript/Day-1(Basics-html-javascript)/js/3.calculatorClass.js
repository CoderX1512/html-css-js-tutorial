class Calculator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add() {
        return this.x + this.y;
    }

    subtract() {
        return this.x - this.y;
    }

    multiply() {
        return this.x * this.y;
    }

    divide() {
        if (this.y === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return this.x / this.y;
    }
}

const p1 = new Calculator(10, 5);

console.log("Addition:", p1.add());
console.log("Subtraction:", p1.subtract());
console.log("Multiplication:", p1.multiply());

try {
    console.log("Division:", p1.divide());
} catch (error) {
    console.error(error.message);
}