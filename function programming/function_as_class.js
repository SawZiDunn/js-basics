// using closure to get similar actions as a class
// closure captures the variables from outer scope

function Stack() {
    data = [];

    function push(x) {
        data.push(x);
    }

    function pop() {
        return data.pop();
    }

    return {push, pop}
}

let stack1 = Stack();
stack1.push(5);
stack1.push(10);
console.log("Stack1: ", stack1.pop());

let stack2 = Stack();
