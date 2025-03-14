// calculating factorial using functional programming

const createArray = (start, end) => {
    // end exclusive
    return new Array(end - start).fill(0).map((value, index) => start + index);
};

const getFactorial = (x) => {
    // prev starts from 1 at first
    return createArray(1, x + 1).reduce((prev, current) => prev * current, 1);
};

console.log(getFactorial(5)); // 120
