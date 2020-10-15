document.querySelector("#T1").addEventListener("click", changeT1);
document.querySelector("#T2").addEventListener("click", changeT2);
document.querySelector("#T3").addEventListener("click", changeT3);
document.querySelector("#T4").addEventListener("click", changeT4);

function changeT1() {
    document.querySelector("#item img").style.src = "../res/img/rewards/reward1.png";
}

function changeT2() {
    document.querySelector("#item img").style.src = "../res/img/rewards/reward2.png";
}

function changeT3() {
    document.querySelector("#item img").style.src = "res/img/rewards/reward3.png";
}

function changeT4() {
    document.querySelector("#item img").style.src = "res/img/rewards/reward4.png";
    console.log("da");
}
