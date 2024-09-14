function generateRandom() {
    return Math.floor(Math.random() * 100) + 1;
}

function isPrime(x) {
    for(let i=2;i <= Math.sqrt(x);i++) {
        if(x % i == 0) return false;
    }
    return true;
}

module.exports = {
    generateRandom, isPrime
};