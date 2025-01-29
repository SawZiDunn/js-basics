const numbers = [1, 2, 3, 4, -8, 5];

let sum = numbers.reduce(
    (accumulator, current_value) => accumulator + current_value,
    0
);

let min = numbers.reduce((return_value, current_value) =>
    return_value < current_value ? return_value : current_value
);

console.log("Sum: ", sum);
console.log("Min: ", min);
