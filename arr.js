let names = ["saw", "father", "mother", "son"];

names.push("How are you?"); //put data from behind
names.unshift("Identity"); //put data from the front

console.log(names.includes("How are you?"));

names.pop(); //remove data from behind
names.shift(); //remove data from the front

console.log(names);

console.log("\forEach");
names.forEach((item) => {
    console.log(item);
});

console.log("For of with index");
for (const [index, item] of Object.entries(names)) {
    console.log(index + "-" + item);
}

console.log("For of without index");
// item is a copy => changing it doesn't change the original value
// use const for best practice
for (const item of names) {
    console.log(item);
}
