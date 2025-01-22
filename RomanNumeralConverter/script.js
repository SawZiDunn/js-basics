document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("convert-btn").addEventListener("click", () => {
        let number = document.getElementById("number").value;
        let result = "";

        if (number === "") {
            result = "Please enter a valid number";
        }

        number = parseInt(number);
        
        if (number < 1) {
            result = "Please enter a number greater than or equal to 1";
        }
        else if (number > 3999) {
            result = "Please enter a number less than or equal to 3999";
        } else {
            const obj = {
                1000: "M",
                900: "CM",
                500: "D",
                400: "CS",
                100: "C",
                90: "XC",
                50: "L",
                40: "XL",
                10: "X",
                9: "IX",
                5: "V",
                4: "IV",
                1: "I",
              }
              
            for (let [key, value] of Object.entries(obj).reverse()) {
    
                let flag = Math.floor(number / parseInt(key));
    
                if (flag >= 1) {    
                    for (let i = 0; i < flag; i++) {
                        result += value;
                        number -= parseInt(key);
                    } 
                }
                if (number % parseInt(key) === 0) {
                    break;
                }
            }
        }
        document.getElementById("output").innerHTML = result;

    })
})