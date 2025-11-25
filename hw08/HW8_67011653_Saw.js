let display = document.getElementById("result");
let memory = 0;

// for user keyboard input
document.addEventListener("keydown", function (event) {
    let key = event.key;

    if (!isNaN(key) || key === ".") {
        if (display.innerText === "0") display.innerText = key;
        else display.innerText += key;
    } else {
        switch (key) {
            case "Backspace":
                display.innerText = display.innerText.slice(0, -1) || "0";
                break;
            case "c":
                display.innerText = "0";
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                display.innerText += key;
                break;
            case "Enter":
            case "=":
                try {
                    display.innerText = eval(display.innerText); // calculate expression
                } catch {
                    display.innerText = "Error";
                }
                break;
        }
    }
});

// for mouse click input
document.querySelectorAll("td[id]").forEach((btn) => {
    btn.addEventListener("click", () => handleMouseInput(btn.id));
});

function handleMouseInput(id) {
    if (!isNaN(id) || id === ".") {
        if (display.innerText === "0") display.innerText = id;
        else display.innerText += id;
    } else {
        switch (id) {
            case "c":
                display.innerText = "0";
                break;
            case "Backspace":
                display.innerText = display.innerText.slice(0, -1) || "0";
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                display.innerText += id;
                break;
            case "Enter":
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error";
                }
                break;

            case "sin":
                display.innerText = Math.sin(toNumber(display.innerText));
                break;
            case "cos":
                display.innerText = Math.cos(toNumber(display.innerText));
                break;
            case "tan":
                display.innerText = Math.tan(toNumber(display.innerText));
                break;
            case "pi":
                replaceLastNumber(Math.PI);
                break;
            case "sqrt":
                display.innerText = Math.sqrt(toNumber(display.innerText));
                break;
            case "square":
                display.innerText = Math.pow(toNumber(display.innerText), 2);
                break;
            case "1/x":
                display.innerText = 1 / toNumber(display.innerText);
                break;
            case "factorial":
                let n = toNumber(display.innerText);
                if (!Number.isInteger(n) || n < 0) {
                    display.innerText = "Error";
                } else {
                    display.innerText = factorial(n);
                }
                break;

            case "mc":
                memory = 0;
                display.innerText = "0";
                break;

            case "m+":
                memory += toNumber(display.innerText);
                display.innerText = "0";
                break;

            case "m-":
                memory -= toNumber(display.innerText);
                display.innerText = "0";
                break;

            case "mr":
                display.innerText = memory.toString();
                break;
        }
    }
}

function toNumber(str) {
    return parseFloat(str);
}

function replaceLastNumber(value) {
    let exp = display.innerText;
    let newExp = exp.replace(/([0-9.]+)$/, value.toString());
    display.innerText = newExp;
}

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
