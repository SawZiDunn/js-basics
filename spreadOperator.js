let a = {
    name: "A",
    age: 25,
};
// ...a = name: "A", age: 25
// copy all properties from a to b

let b = {
    ...a,
    name: "B", // modify name
    color: "green",
};

console.log(b);
