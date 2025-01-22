document.addEventListener("DOMContentLoaded", () => {
    const buttonElement = document.querySelector("#check-btn");

    buttonElement.onclick = () => {
        const inputValue = document.querySelector("#text-input").value;
        palindromeChecker(inputValue);
    };

    // buttonElement.addEventListener("click", () => {
    //     const inputValue = document.querySelector("#text-input").value;
    //     palindromeChecker(inputValue);
    // });
});

function palindromeChecker(inputValue) {
    if (inputValue === "") {
        alert("Please input a value");
    }

    let resultValue = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let newString = "";

    for (let i = resultValue.length - 1; i >= 0; i--) {
        newString += resultValue[i]; //resultValue.charAt[i]
    }

    if (resultValue === newString) {
        document.querySelector(
            "#result"
        ).innerHTML = `${inputValue} is a palindrome`;
    } else {
        document.querySelector(
            "#result"
        ).innerHTML = `${inputValue} is not a palindrome`;
    }

    // let start = 0;
    // let end = resultValue.length - 1;
    // while (start < end) {
    //     if (resultValue[start] !== resultValue[end]) {
    //         document.querySelector(
    //             "#result"
    //         ).innerHTML = `${inputValue} is not a palindrome.`;
    //         return;
    //     }
    //     start++;
    //     end--;
    // }
    // document.querySelector(
    //     "#result"
    // ).innerHTML = `${inputValue} is a palindrome.`;
}
