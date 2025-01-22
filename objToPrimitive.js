let a = 2;

const obj = {
    valueOf: () => {
        return {};
    },

    toString() {
        return {};
    },
    data: 25,
};

console.log(obj.valueOf());
/* call obj.valueOf(), if it returns a primitive, use it
   if not, call obj.toString(), if it still returns non-primitive, TypeError
*/

let c = obj + a;
console.log(c);
