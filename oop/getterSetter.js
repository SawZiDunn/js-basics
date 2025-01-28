let Person = {
    _age: 25,

    displayAge() {
        console.log(this.age); // calls age() getter
    },

    set age(newAge) {
        if (newAge > 0 && newAge < 100) {
            this._age = newAge;
        }
    },

    get age() {
        return this._age;
    },
};

Person.age = 100; // calls age setter method
console.log(Person.age); // calls age() getter method
