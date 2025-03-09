function order(card) {
    console.log("order: ", card);
}

function purchase(card) {
    console.log("purchase: ", card);
}

function once(fn) {
    let done = false;
    return function (...args) {
        // captures done from outer scope via closure
        // persists inside this function due to closure
        if (!done) {
            fn(...args);
            done = true;
        }
    };
}

purchase = once(purchase);
purchase(1); // after that, done is set to true
purchase(2); // won't be called since done is true this time
