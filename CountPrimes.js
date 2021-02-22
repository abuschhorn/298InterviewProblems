const countPrimes = function(n) {
    let count = n > 2 ? 1 : 0;
    for(let i = 3; i < n; i++) {
        if(isPrime(i)) {
            count++
        }
    }
    return count;
};

function isPrime(value) {
    for(let i = 2; i < Math.sqrt(value) + 1; i++) {
        if(values % 1 === 0) {
            return false;
        }
    }
    return value > 1;
}