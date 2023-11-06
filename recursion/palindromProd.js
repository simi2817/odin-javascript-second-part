//need to convert this to recursion
const palindromeProd = (digit) => {
    let palindrome = [];
    let product = 1;
    
    const start = setStartEnd(digit)[0];
    const end = setStartEnd(digit)[1];

    for(let i = start; i < end; i++) {
        for(let j = (i+1); j < end; j++) {
            product = i * j;
            if(checkPalindrome(product))
                palindrome.push(product);
        }
    }
    return highestPalindrome(palindrome);  
}

const setStartEnd = (digit) => {
    if(digit === 2)
        return [10, 100];
    else if(digit === 3)
        return [100, 1000];
}
const checkPalindrome = (num) => {
    const reversed = Number(num.toString().split('').reverse().join(''));
    if(reversed === num)
        return true;
    else
        return false;
}

const highestPalindrome = (palindrome) => {
    palindrome.sort((a, b) => a - b);
    return palindrome[palindrome.length - 1];
}

console.log(palindromeProd(2)); //9009 = 91 x 99
console.log(palindromeProd(3)); //906609 = 913 x 993