function hello(x) {
    console.log(x);
    return 1;
}

// wraps a function, returns a modified function
const wrapper = (fn) => {
    return (...args) => {
        console.log(args); // args list from fn
        console.log("start");
        let result = fn(...args);
        console.log("end");

        return result; // in case the function returns something
    };
};

hello = wrapper(hello);
console.log(hello("Hello")); // 1
