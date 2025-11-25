const compose = (...fns) => {
    return (x) => {
        return fns.reduceRight((output, fn) => fn(output), x);
    };
};

const pipe = (...fns) => {
    return (x) => {
        return fns.reduce((output, fn) => fn(output), x);
    };
};

const appendX = (x) => "x " + x;
const appendHello = (x) => "hello " + x;
const uppercase = (x) => x.toUpperCase();

const appendXHelloUpper = pipe(appendX, appendHello, uppercase);
const upperHelloX = compose(appendX, appendHello, uppercase);

console.log(appendXHelloUpper("a")); // HELLO X A
console.log(upperHelloX("a")); // x hello A
