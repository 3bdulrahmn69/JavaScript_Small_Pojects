let btn = document.querySelector(".btn");
let arr = ["#618264", "#79AC78", "#B0D9B1", "#D0E7D2","#8EACCD","#FFB000","#004225","#141E46","#E9B824", "#fff", "#000"];
let color;

function randomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

function cheackColor () {
    if (color === "#000") {
        btn.style.cssText = "background-color: #fff; color: #000;";
    }else {
        btn.style.cssText = "background-color: #000; color: #fff;";
    };
};

if (localStorage.getItem("color")){
    color = localStorage.getItem("color");
    document.body.style.cssText = `background-color: ${color};`;
}

cheackColor();

btn.addEventListener("click", function () {
    let color = randomColor();
    document.body.style.cssText = `background-color: ${color};`;
    cheackColor();
    window.localStorage.setItem("color", color);
});
