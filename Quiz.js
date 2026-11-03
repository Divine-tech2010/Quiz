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
        out.textContent = result === undefined ? "undefined (no rule matched)" : String(result);
    } catch (error) {
        out.className = "answer problem";
        out.textContent = error.message;
    }
}

function solve_deliveryCharge() {
    show("deliveryCharge", () => deliveryCharge(num("deliveryCharge-amount"), num("deliveryCharge-distance")));
}
