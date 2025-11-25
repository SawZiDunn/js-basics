// multiple-parameterized functions -> single parameterized functions
// fn(a, b, c) -> fn(a)(b)(c)

// manual
let add = (a) => {
    return (b) => {
        return a + b;
    };
};

// use loadash for this implementation
let curry = (fn) => {};

let add5 = add(5); // add5 is a function that adds something to 5

console.log(add5(10)); // add(5)(10);

let x = curry(add);

console.log(x.toString());
console.log(x(10)(10)(10));
