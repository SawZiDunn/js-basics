function increment() {

    let counter = 0;
    return () => {
        return counter++;
    }
}

let id1 = increment();
// variable 'counter' is kept between function calls
console.log(id1()); // 1
console.log(id1()); // 2
console.log(id1()); // 3

let id2 = increment();
console.log(id2()); // 1
console.log(id2()); // 2
console.log(id2()); // 3