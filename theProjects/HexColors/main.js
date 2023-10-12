let btn = document.querySelector(".btn");
let arr = ["#618264", "#79AC78", "#B0D9B1", "#D0E7D2", "#8EACCD", "#FFB000", "#004225", "#141E46", "#E9B824", "#fff", "#000"];
let cpBtn = document.querySelector(".cp");
let color;
let hexCode = document.querySelector(".hexcode");

function randomColor() {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}

function checkColor() {
    if (color === "#000") {
        btn.style.cssText = "background-color: #fff; color: #000;";
        hexCode.style.cssText = "background-color: #fff; color: #000;";
    } else {
        btn.style.cssText = "background-color: #000; color: #fff;";
        hexCode.style.cssText = "background-color: #000; color: #fff;";
    }
}

if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
    document.body.style.cssText = `background-color: ${color};`;
} else {
    color = "#fff"
}

hexCode.textContent = `Hexcode ${color}`;
cpBtn.textContent = "Copy"

checkColor();

btn.addEventListener("click", function () {
    color = randomColor();
    document.body.style.cssText = `background-color: ${color};`;
    hexCode.textContent = `Hexcode ${color}`;
    checkColor();
    window.localStorage.setItem("color", color);
});

cpBtn.addEventListener("click", function () {
    // Create a temporary input element
    const tempInput = document.createElement("input");
    // Set the value of the input to the color hex code
    tempInput.value = color;
    // Append the input to the document
    document.body.appendChild(tempInput);
    // Select the value in the input
    tempInput.select();
    // Copy the selected text
    document.execCommand("copy");
    // Remove the temporary input
    document.body.removeChild(tempInput);
    // Change text to "copied" for 1 second
    cpBtn.textContent = "Copied";
    setTimeout(() => {
        cpBtn.textContent = "Copy";
    }, 300);
});
