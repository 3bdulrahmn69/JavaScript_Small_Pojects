let numElements = document.querySelectorAll(".num");
let inArea = document.querySelector(".in-area");
let del = document.querySelector(".del");
let clear = document.querySelector(".clear");
let eq = document.querySelector(".eq");

inArea.textContent = "";

numElements.forEach(function (num) {
    num.onclick = function () {
    let dataValue = num.getAttribute("data-value");
    let displayElement = document.createElement("div");
    displayElement.textContent = dataValue;
    inArea.appendChild(displayElement);
    };
});

del.onclick = function () {
  // Check if there are any children before attempting to remove
    if (inArea.lastChild) {
    inArea.removeChild(inArea.lastChild);
    }
};

clear.onclick = function () {
    inArea.textContent = "";
}

eq.onclick = function () {
    // Get the mathematical expression from inArea.textContent
    let mathExpression = inArea.textContent;

    // Use eval to perform the calculation
    try {
        let result = eval(mathExpression);

        // Display the result in inArea
        inArea.textContent = result;
    } catch (error) {
        // Handle any errors (e.g., if the expression is not valid)
        console.error("Error evaluating expression:", error);
        inArea.textContent = "Error";
    }
};