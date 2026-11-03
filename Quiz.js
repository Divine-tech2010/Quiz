// ===== deliveryCharge =====

function deliveryCharge(amount, distance) {
    if (amount >= 50000) {
        return 0;
    }
    if (distance <= 5) {
        return 1500;
    }
    if (distance >= 5 && distance <= 15) {
        return 3000;
    }
    return 5000;
}

// ===== waterConsumption =====

function waterConsumption() {
    let water = 100;
    const consumption = 12;
    let operation = 0;
    let output = "";

    output += "Initial water Level: " + water + " liters\n";
    
    while (water >= consumption && operation < 20) {
        operation++;
        water -= consumption;
        output += `Operation ${operation}: ${water} liters remaining\n`;

        let percentage = Math.round((water / 100) * 100);
        output += `Percentage of water remaining: ${percentage}%\n`;

        if (water < 30) {
            output += "LOW WATER ALERT\n";
        }

        if (water < 30) {
            let refillAmount = 50;
            let newlevel = water + refillAmount;
            if (newlevel > 100) newlevel = 100;

            output += `Refilling water tank with ${refillAmount} liters.\n`;
            water = newlevel;
            output += `New water level: ${water} liters\n`;
        }
    }

    if (water < consumption) {
        output += `Not enough water to continue operations. Remaining: ${water} liters\n`;
    }
    return output;
}

function num(id) {
    const box = document.getElementById(id);
    if (box.value === "") {
        throw new Error("Enter a number for" +id.split("-")[1] + ".");
    }
    return Number(box.value);
}
 
function txt(id) {
    return document.getElementById(id).value;
}

function bool(id) {
    return document.getElementById(id).checked;
}

function show(name, run){
    const out = document.getElementById(name + "-answer");
    try{
        const result = run();
        out.className = "answer" + (result === true ? "yes" : result === false ? "no" : "");
        out.innerHTML = result === undefined ? "undefined (no rule matched)" : String(result).replace(/\n/g, "<br>");
    } catch (error) {
        out.className = "answer problem";
        out.textContent = error.message;
    }
}

function solve_deliveryCharge() {
    show("deliveryCharge", () => deliveryCharge(num("deliveryCharge-amount"), num("deliveryCharge-distance")));
}

function solve_waterConsumption() {
    show("waterConsumption", () => waterConsumption());
}
