const decBtn = document.getElementById("--Btn")
const rBtn = document.getElementById("rBtn")
const incBtn = document.getElementById("++Btn")
const countLabel = document.getElementById("countLabel");
let count = 0;

incBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
rBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}


