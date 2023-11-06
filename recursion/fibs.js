
let arr = [];
let n1 = 0;
let n2 = 1;
let sum = 0;

const fibs = (length) => {
    for(let i = 0; i < length; i++) {
        arr.push(n1);
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }
    return arr;
}

console.log(fibs(8));