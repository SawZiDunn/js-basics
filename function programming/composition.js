// combine functions as one,
// can have only one parameter
const compose = (...fns) => {
    return (x) => {
        // work from right to left
        return fns.reduceRight((output, currentFn) => currentFn(output), x);
        // return fn1(fn2(x));

        // use reduce for left to right
    };
};

const upper = (x) => {
    return x.toUpperCase();
};

const appendHello = (x) => {
    return "Hello " + x;
};

// accepts x, print, and returns x
// const log = (x) => {
//     console.log(x);
//     return x;
// };

// use fn and return input
const tap = (fn) => {
    return (x) => {
        fn(x);
        return x;
    };
};

// use console.log and return input of console.log
const log = tap(console.log);

const composed = compose(upper, log, appendHello, log);
composed("abc");
