const x = "Hello World";

const y = x.substring(-4); // does not support negative index
console.log(y); // Hello World

const z = x.slice(-4);
console.log(z); // 'orld'
