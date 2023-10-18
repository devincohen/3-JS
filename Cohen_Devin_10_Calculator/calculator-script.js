var first = -0;
var second = -0;
var result = -0;
var op = "";

var isPlus = false;
var isMinus = false;
var isDivide = false;
var isTimes = false;
var calcActive = false;
var opArray = [isPlus, isMinus, isDivide, isTimes];

var plusButton = document.querySelector("#plus");
var minusButton = document.querySelector("#minus");
var divideButton = document.querySelector("#divide");
var timesButton = document.querySelector("#times");
var opButton = document.querySelectorAll(".operator");
var activeCount = 0;
var display = document.querySelector("#display");


function setOP(operator) {
    op = operator;
    if (op == "/"){
        isPlus = false;
        isMinus = false;
        isDivide = true;
        isTimes = false;
        clrBtns();
        divideButton.style.backgroundColor = "rgb(255, 104, 0)";

    }
    else if (op == "*"){
        isPlus = false;
        isMinus = false;
        isDivide = false;
        isTimes = true;
        clrBtns();
        timesButton.style.backgroundColor = "rgb(255, 104, 0)";    
    }
    else if (op == "+"){
        isPlus = true;
        isMinus = false;
        isDivide = false;
        isTimes = false;
        clrBtns();
        plusButton.style.backgroundColor = "rgb(255, 104, 0)";    
    }
    else if (op == "-"){
        isPlus = false;
        isMinus = true;
        isDivide = false;
        isTimes = false;    
        clrBtns();
        minusButton.style.backgroundColor = "rgb(255, 104, 0)";
    }
    activeCount = 0;
    first = Number(display.innerText);
    calcActive = true;
    activeCount++;
}

function press(num){
    var calc = display.innerText;
    if (calc.includes(".")==true && num==".") {
        //adds nothing, to prevent multiple decimals
    }
    else if (calc == 0 && num==".") {
        display.innerText += num;
    }
    else if (calc === "0"){
        display.innerText = num;
    }
    else if (calc.length < 8){
        display.innerText += num;
    }
    if(op != "" && calcActive == true && activeCount == 1) {
        display.innerText = num;
        activeCount++;
    }
}

function calculate(){
    second = Number(display.innerText);
    if(first=== -0 || second=== -0) {
        //do nothing
    }
    else if(op==""){
        //do nothing here also
    }
    else if (op === "/"){
        result = first/second;
    }
    else if (op == "*"){
        result = first * second;
    }
    else if (op == "+"){
        result = first + second;
    }
    else if (op == "-"){
        result = first - second;
    }
    if (result > 99999999){
        display.innerText = result.toExponential(1)
    }
    else {
        display.innerText = Number(result);
    }
    first = result;
    op = "";
    clrBtns();
}

function clr() {
    first = -0;
    second = -0; 
    result = -0;
    calcActive = false;
    activeCount = 0;
    op = "";
    document.querySelector("#display").innerText = 0;
    clrBtns();

}

function clrBtns (){
    for (let i = 0; i < opButton.length; i++){
        opButton[i].style.backgroundColor = "rgb(255, 204, 0)";
    }
    for (let i = 0; i < opArray.length; i++){
        opArray[i] = false;
    }
}