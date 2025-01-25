/* 
Object.create(prototype) creates an object that has
 a specific or null prototype 

Prototype is a parent object.


{x: 32, y: [1, 2, 3]} -> parent -> child
 
 */

let parent = { x: 32, y: [1, 2, 3] };
let child = Object.create(parent);
child.z = 29;
child.y.push(4); // appends to y from parent prototype
child.y = 0; // doesn't override y from parent prototype, write a new y in child obj

console.log("Parent: ", parent);
console.log("Child", child);
console.log("Calling x from child: ", child.x); // calls x from root prototype
console.log("Calling y from child: ", child.y);
