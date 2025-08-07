const rollBtn = document.getElementById("rollBtn");
const labelBtn1 = document.getElementById("labelBtn1");
const labelBtn2 = document.getElementById("labelBtn2");
const labelBtn3 = document.getElementById("labelBtn3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;


rollBtn.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;

    labelBtn1.textContent = randomNum1;
    labelBtn2.textContent = randomNum2;
    labelBtn3.textContent = randomNum3;
}