let names = ["daughter", "father", "mother", "son"];

names.push("nephew"); //append data from behind
names.unshift("niece"); //append data from the front

console.log(names.includes("nephew")); // true

names.pop(); //remove data from behind
names.shift(); //remove data from the front

console.log("forEach");
names.forEach((item) => {
    console.log(item);
});

console.log("For of without index");
// item is a copy => changing it doesn't change the original value
// use const for best practice
for (const item of names) {
    console.log(item);
}

console.log("For of with index");
for (const [index, item] of Object.entries(names)) {
    // names.entries()
    console.log(index + "-" + item);
}

// alternatives to initialize an array
let numbers1 = new Array(1, 2, 3, 4, 5);
let numbers2 = new Array(5); // empty arr with length 5
let numbers3 = Array(1, 2, 3, 4, 5);

/*
    if (convertable to integer) {convert}
    else {becomes array property, doesn't count for length}
*/
numbers1["5"] = 6; // "5" -> 5
numbers1["001"] = 1; // "001": 1
numbers1["new"] = 2; // "new": 2
numbers1.item = 3;
console.log("Numbers1: ", numbers1);
console.log("Numbers1 Length: ", numbers1.length); // 6
