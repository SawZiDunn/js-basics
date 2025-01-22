let price = 19.5;
let cid = [
    ["PENNY", 0.5], 
    ["NICKEL", 0], 
    ["DIME", 0], 
    ["QUARTER", 0], 
    ["ONE", 0], 
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 0], 
    ["ONE HUNDRED", 0]
]

let currencyUnit = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("purchase-btn").addEventListener("click", () => {

        let cash = parseFloat(document.getElementById("cash").value);

        if (cash < price) {
            alert("Customer does not have enough money to purchase the item");
        }
        else if (cash === price) {
            document.getElementById("change-due").innerHTML = "No change due - customer paid with exact cash";
        }
        else {
            let refund = cash - price;
            let str = "";
            let total = 0;
            for (let i of cid) {
                total += i[1];
            }
            total = parseFloat(total.toFixed(2));
            let closed = total === refund;

            if (refund > total) {
                document.getElementById("change-due").innerHTML = "Status: INSUFFICIENT_FUNDS";
                return;
            }

            for (let i = cid.length - 1; i >= 0; i--) {
                let change = 0;

                while (refund >= currencyUnit[i] && cid[i][1] >= currencyUnit[i]) {

                    cid[i][1] = parseFloat((cid[i][1] - currencyUnit[i]).toFixed(2));
                    refund = parseFloat((refund - currencyUnit[i]).toFixed(2));
                    change += currencyUnit[i];

                }
                if (change != 0) {
                    str += `${cid[i][0]}: $${change.toFixed(2)} `;
                }

            }

            if (refund === 0 && !closed) {
                document.getElementById("change-due").innerHTML = `Status: OPEN ${str}`;
                
            }
            else if (refund === 0 && closed) {
                document.getElementById("change-due").innerHTML = `Status: CLOSED ${str}`;
            }
        }
    })
})