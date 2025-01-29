const cars = [
    { brand: "Toyota", model: "Corolla", year: 2022 },
    { brand: "Honda", model: "Civic", year: 2022 },
    { brand: "Ford", model: "Mustang", year: 2023 },
    { brand: "BMW", model: "X5", year: 2023 },
    { brand: "Audi", model: "A4", year: 2019 },
];

// group items by a given key
const groupBy = (arr, key) => {
    // for (item of arr) {
    //     if (obj[item[key]]) {
    //         obj[item[key]].push(item);
    //     } else {
    //         obj[item[key]] = [item];
    //     }
    // }

    let obj = arr.reduce((group, item) => {
        if (group[item[key]]) {
            // group["2022"]
            group[item[key]].push(item);
        } else {
            group[item[key]] = [item];
        }
        return group;
    }, {});
    return obj;
};
console.log("Grouped: ", groupBy(cars, "year"));
