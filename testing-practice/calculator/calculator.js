class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    checkInput() {
        if(typeof this.num1 !== 'number' || typeof this.num2 !== 'number')
            return true;
        else
            return false;
    }

    printError() {
        return 'Invalid input! Please enter two numbers!';
    }

    add() {
        if(!this.checkInput())
            return this.num1 + this.num2;
        else
            return this.printError();
    }

    subtract() {
        if(!this.checkInput())
            return this.num1 - this.num2;
        else
            return this.printError();
    }

    divide() {
        if(!this.checkInput())
            return this.num1 / this.num2;
        else
            return this.printError();
    }

    multiply() {
        if(!this.checkInput())
            return this.num1 * this.num2;
        else
            return this.printError();
    }
}

module.exports = Calculator;