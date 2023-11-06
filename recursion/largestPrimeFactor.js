//need to convert this to recursion
let primeFacArr = [];

const largestPrimeFactor = (num) => {
    for(let i = num; i >= 2; i--) {
        if(num % i === 0) {
            const isPrime = checkPrime(i);
            if(isPrime) {
               addPrimeFactors(i);
            }
        }
    }

    return primeFacArr.sort((a, b) => a - b);
}

const checkPrime = (num) => {
    let flag = false;
    if(num > 1) {
        for(let i = 2; i <= num / 2; i++) {
            if(num % i === 0) {
                flag = true;
                break;
            }
        }
    }
    if(!flag)
        return true;
}

const addPrimeFactors = (num) => {
    return primeFacArr.push(num);
}

console.log(largestPrimeFactor(13195)); //[ 5, 7, 13, 29 ]
console.log(largestPrimeFactor(6008)); //[ 2, 5, 7, 13, 29, 751]