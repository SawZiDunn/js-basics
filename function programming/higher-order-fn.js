// return functions or accept functions as parameters

function times(n) {
    return function (x) {
        return x * n;
    };
}

let double = times(2); // double is a function that can double a num
let triple = times(3); // triple is a function that can triple a num

console.log("Double: " + double(5) + " " + "Triple: " + triple(5));
