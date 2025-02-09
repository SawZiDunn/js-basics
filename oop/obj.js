let obj = {
    name: "John",

    x: () => {
        console.log(this.name); // this is undefined in arrow function
    },

    y() {
        console.log(this.name);
    },

    z: function() {
        console.log(this.name);
    }

}

obj.x();
obj.y();
obj.z();