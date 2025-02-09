const increase = () => {
    let x = 0;
    return () => ++x;
};

let increase0 = increase(); // increase0 is now a function
increase0(); // x = 1
increase0(); // x = 2

console.log("============");

const add = (a) => (b) => a + b;

let x = add(5); // x is now a function that will add something to 5
let y = x(6); // calling x(6) triggers the addition of 6 to 5

console.log(y);
