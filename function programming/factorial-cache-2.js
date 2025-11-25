let getFactorial = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};

const memonize = (fn) => {
    let cache = {};

    return (n) => {
        if (cache[n]) {
            console.log("returns cached value");
            return cache[n];
        }

        console.log("calculating factorial");
        cache[n] = fn(n);
        return cache[n];
    };
};

getFactorial = memonize(getFactorial);
console.log(getFactorial(4));
console.log(getFactorial(4));
console.log(getFactorial(5));
