function alertCity (element) {
    var name = element.innerText;
    alert(name + "!");
}

function fahrCels() {
    var temps = [];
    for (let i = 1; i<=8; i++) {
        temps.push(document.querySelector("#temp-"+ i).innerText);
        temps[i-1] = temps[i-1].slice(0,-1);
        console.log
        if (document.querySelector("#units").value.includes("c")){
            temps[i-1] = Math.round((temps[i-1] - 32)*5/9); 
            document.querySelector("#temp-"+i).innerText = temps[i-1].toString()+"º";
        }
        else if(document.querySelector("#units").value.includes("f")){
            temps[i-1] = Math.round((temps[i-1] * 9/5) + 32); 
            document.querySelector("#temp-"+i).innerText = temps[i-1].toString()+"º";
        }
        else{
            console.log("meh");
        }
    }
}

function hide(element){
    var item = document.querySelector(element);
    item.remove();
}