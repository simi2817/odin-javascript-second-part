const Calculator = require('./calculator');

describe('Calculator class', () => {   
    describe('add operation: ', () => {
        test('expect inputs as numbers', () => {
            const calculator = new Calculator('a', 'b');
            const output = calculator.add();
            expect(output).toBe('Invalid input! Please enter two numbers!');
        });
    
        test('add operation returns sum', () => {
            const calculator = new Calculator(2,3);
            const sum = calculator.add();
            expect(sum).toBe(5);
        });
    });

    describe('subtract operation: ', () => {
        test('expect inputs as numbers', () => {
            const calculator = new Calculator('a', 'b');
            const output = calculator.subtract();
            expect(output).toBe('Invalid input! Please enter two numbers!');
        });

        test('subtract operation returns difference', () => {
            const calculator = new Calculator(5,3);
            const difference = calculator.subtract();
            expect(difference).toBe(2);
        });
    });

    describe('divide operation: ', () => {
        test('expect inputs as numbers', () => {
            const calculator = new Calculator('a', 'b');
            const output = calculator.subtract();
            expect(output).toBe('Invalid input! Please enter two numbers!');
        });

        test('divide operation returns quotient', () => {
            const calculator = new Calculator(10,2);
            const quotient = calculator.divide();
            expect(quotient).toBe(5);
        });
    });

    describe('multiply operation: ', () => {
        test('expect inputs as numbers', () => {
            const calculator = new Calculator('a', 'b');
            const output = calculator.multiply();
            expect(output).toBe('Invalid input! Please enter two numbers!');
        });

        test('multiply operation returns product', () => {
            const calculator = new Calculator(10,2);
            const product = calculator.multiply();
            expect(product).toBe(20);
        });
    });
});