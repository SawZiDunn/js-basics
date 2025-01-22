document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("check-btn").onclick = () => {
        //buttonElement.onclick works only after DOMContentLoaded
        //but adding EventListener() works without that
        const input = document.getElementById("user-input").value;

        if (input === "") {
            alert("Please provide a phone number");
        }
        else {
            const UsPhonePattern = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
            if (UsPhonePattern.test(input)){
                document.getElementById("results-div").innerHTML = "Valid US number: " + input;
            }
            else {
            document.getElementById("results-div").innerHTML = "Invalid US number: " + input;
            }
        }

    }

    document.getElementById("clear-btn").onclick = () => {
        document.getElementById("results-div").innerHTML = "";
    }
    
})

