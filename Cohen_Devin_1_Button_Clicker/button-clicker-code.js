function loginLogoff(btn) {
    if (btn.innerText == "Login") {
        btn.innerText = "Log Off";
    }
    else{
        btn.innerText = "Login";
    }
}

function hide(btn) {
    btn.remove();
}