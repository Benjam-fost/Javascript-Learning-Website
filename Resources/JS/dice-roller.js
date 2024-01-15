const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let ranNum1, ranNum2, ranNum3;

myButton.onclick = function(){
    ranNum1 = Math.floor((Math.random() * max) + min);
    ranNum2 = Math.floor((Math.random() * max) + min);
    ranNum3 = Math.floor((Math.random() * max) + min);
    label1.textContent=ranNum1;
    label2.textContent=ranNum2;
    label3.textContent=ranNum3;
}