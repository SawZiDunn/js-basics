let names = ["saw", "father", "mother", "son"];

names.push("How are you?"); //put data from behind
names.unshift("Identity"); //put data from the front

names.pop(); //remove data from behind
names.shift(); //remove data from the front

console.log(names);

names.forEach((item) => {
    console.log(item);
});

for (const [index, item] of Object.entries(names)) {
    console.log(index + "-" + item);
}
