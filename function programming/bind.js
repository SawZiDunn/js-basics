const multiply = (a, b) => {
    console.log(a, b);
    return a * b;
};

// bind is used for partial function application
// it assign 2 in b position and returns a function
const double = multiply.bind(null, 2); // replace a with 2
console.log(double(5));
