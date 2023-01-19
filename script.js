const result = document.getElementById("resultult");

document.addEventListener("keydown", key);

function key(k) {
    e.preventDefault();

    if (k.key === "0") {
        result.value += "0";
    } else if (k.key === "1") {
        result.value += "1";
    } else if (k.key === "2") {
        result.value += "2";
    } else if (k.key === "3") {
        result.value += "3";
    } else if (k.key === "4") {
        result.value += "4";
    } else if (k.key === "5") {
        result.value += "5";
    } else if (k.key === "6") {
        result.value += "6";
    } else if (k.key === "7") {
        result.value += "7";
    } else if (k.key === "7") {
        result.value += "7";
    } else if (k.key === "8") {
        result.value += "8";
    } else if (k.key === "9") {
        result.value += "9";
    } else if (k.key === "+") {
        result.value += "+";
    } else if (k.key === "-") {
        result.value += "-";
    } else if (k.key === "*") {
        result.value += "*";
    } else if (k.key === "/") {
        result.value += "/";
    } else if (k.key === ".") {
        result.value += ".";
    } else if (k.key === "Enter") {
        calculate(resultult.value);
    } else if (k.key === "Backspace") {
        const resultultInput = result.value;
        result.value = resultultInput.substring(0, result.value.length - 1);
    } else {
        window.alert("Only numbers are allowed");
    }
}

function live(enteredValue) {
    if (!result.value) {
        result.value = "";
    }
    result.value += enteredValue;
}


function calc(value) {
    const calAltVal = eval(value || null);
    if (isNaN(calAltVal)) {
        result.value = "Can't divide 0 with 0";
        setTimeout(() => {
            resultult.value = "";
        }, 1300);
    } else {
        result.value = calAltVal;
    }
}