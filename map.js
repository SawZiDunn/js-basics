let myMap = new Map();

myMap.set("name", "Jim");
myMap.set("age", 22);

console.log(myMap, typeof myMap);

myMap.forEach((value, key) => {
    console.log(key + " " + value);
});
