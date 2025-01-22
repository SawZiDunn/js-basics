document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("temp").onclick = convertTemperature;
    document.getElementById("w").onclick = convertWeight;
    document.getElementById("d").onclick = convertDistance;
});

function convertTemperature() {
    let c = parseFloat(document.getElementById("c").value);

    if (!isNaN(c)) {
        let f = (c * 9) / 5 + 32;
        document.getElementById("f").value = f.toFixed(2);
    }
}

function convertWeight() {
    let kg = document.getElementById("kg").value;
    let pounds = kg * 2.205;
    document.getElementById("pounds").value = pounds;
}

function convertDistance() {
    let km = document.getElementById("km").value;
    let miles = km / 1.609;
    document.getElementById("miles").value = miles;
}
