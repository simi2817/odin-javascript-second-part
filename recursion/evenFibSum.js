
const fibonacci = (limit) => {
    if(limit < 2)
        return limit;
    return fibonacci(limit - 1) + fibonacci(limit - 2);
}

const evenFibSum = (limit) => {
    let sum = 0;
    for(let i = 0; i < limit; i++) {
        if(fibonacci(i) % 2 === 0)
            sum += fibonacci(i);
    }
    return sum;
}

console.log(evenFibSum(10)); // 1 1 2 3 5 8 13 21 34 55 -> 2 + 8 + 34 = 44
console.log(evenFibSum(8)); // 1 1 2 3 5 8 13 21 -> 2 + 8 = 10