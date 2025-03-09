const getFactorial = (n) => {
    if (getFactorial.cache[n]) {
        // return cached value if it exists
        return getFactorial.cache[n];
    }

    let result = 1;
    console.log("Calculating Factorial...");
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    getFactorial.cache[n] = result;

    return result;
};

getFactorial.cache = {};

console.log(getFactorial(5));
console.log(getFactorial(5)); // return cached result, won't calculate again
console.log(getFactorial(3));
