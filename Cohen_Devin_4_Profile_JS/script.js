function hide(parent, boxNumber) {
    var parentSrc = document.querySelector(parent);
    var boxNumberSrc = document.querySelector(boxNumber);
    var requests = boxNumberSrc.innerText;
    requests--;
    boxNumberSrc.innerText = requests;
    parentSrc.remove();
}

function hideIncrease(parent, boxNumber, boxNumber2) {
    var parentSrc = document.querySelector(parent);
    var boxNumberSrc = document.querySelector(boxNumber);
    var boxNumber2Src = document.querySelector(boxNumber2);
    var requests = Number(boxNumberSrc.innerText);
    requests--;
    boxNumberSrc.innerText = requests;
    parentSrc.remove();
    increase(boxNumber2Src);
    console.log(parentSrc.innerText);
}

function increase(boxNumber) {
    var requests = boxNumber.innerText;
    requests++;
    boxNumber.innerText = requests;
}

function editName() {
    document.querySelector('#profile-name').innerText = prompt();
}