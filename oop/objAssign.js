function plugin(params) {
    let defaultObj = { color: "green", age: 5 };

    // for (let key in params) {
    //     defaultObj[key] = params[key]; // modify defaultObj
    // }

    // copy values from params to defaultObj and returns a new obj
    // doesn't modify any object
    let objToUse = Object.assign(defaultObj, params);

    console.log(objToUse);
}

plugin({ color: "blue", age: 3 });
