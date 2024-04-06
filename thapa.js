let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");


let rgb1 = "#000";
let rgb2 = "#fff";

const haxValues = () => {
    let  myhaxValue = "0123456789abcdef";
    let colors = "#";
     for(let i= 0; i<6; i++){
       colors = colors + myhaxValue[Math.floor(Math.random() * 16 )];
     }
     return colors;
};

const handleButton1 = () => {
    rgb1 =  haxValues();
    btn1.innerHTML = rgb1;
    btn1.style.background = rgb1;
    copyDiv.style.background =  `linear-gradient(to left, ${rgb1}, ${rgb2})`;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML =  `linear-gradient (to right, ${rgb1}, ${rgb2})`;
};

const handleButton2 = () => {
    rgb2 =  haxValues();
    btn2.innerHTML = rgb2;
    btn2.style.background = rgb2;
    copyDiv.style.background =  `linear-gradient(to left, ${rgb1}, ${rgb2})`;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML =  `linear-gradient (to right, ${rgb1}, ${rgb2})`;
};

copyDiv.addEventListener("click", () => {
navigator.clipboard.writeText(copyDiv.innerText);
alert("copied")
});

btn1.addEventListener("click" , handleButton1); 
btn2.addEventListener("click" , handleButton2); 