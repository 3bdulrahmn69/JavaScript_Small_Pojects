let inBtn = document.querySelector(".increase")
let DeBtn = document.querySelector(".decrease")
let numberP = document.querySelector(".numberP")

let index = 0;

function display() {
    numberP.textContent = index;
};

display();

function increase() {
    index++;
    display();
}

function decrease() {
    index--;
    display();
}

function rest() {
    index = 0;
    display();
}