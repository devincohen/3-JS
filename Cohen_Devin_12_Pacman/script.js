var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,2,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,2,2,1,1,2],
    [2,1,1,2,1,1,1,1,1,1,1,2,1,1,2],
    [2,1,1,2,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,1,1,1,1,3,1,1,1,1,1,2],
    [2,1,1,2,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,3,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,1,1,1,1,1,1,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];



function displayWorld(){
    var output = "";
    
    for(var i = 0; i < world.length; i++){
        output = output + "<div class='row'>";
        for (var j = 0; j < world[i].length; j++){
            if(world[i][j]==2){
                output += "<div class='brick'></div>";
            }
            else if(world[i][j]==1){
                output += "<div class='coin'></div>";
            }
            else if(world[i][j]==3){
                output += "<div class='cherry'></div>";
            }
            if(world[i][j]==0){
                output += "<div class='empty'></div>";
            }
        }
        output += "</div>";
    }
    document.getElementById('world').innerHTML = output;
}


var pacman = {
    x: 1,
    y: 1
};
var pacman2 = {
    x: 9,
    y: 9
};

var ghost = {
    x: Math.ceil(Math.random()* (world[0].length-1)),
    y: Math.ceil(Math.random()* (world.length-1)),
    direction: [-1,1]
};

var score = 0;
var lives = 5;

function displayPacman(){
    document.getElementById('pacman').style.left = pacman.x*20 + "px";
    document.getElementById('pacman').style.top = pacman.y*20 + "px";
}
function displayPacman2(){
    document.getElementById('pacman2').style.left = pacman2.x*20 + "px";
    document.getElementById('pacman2').style.top = pacman2.y*20 + "px";
}
function displayGhost(){
    document.getElementById('ghost').style.left = ghost.x*20 + "px";
    document.getElementById('ghost').style.top = ghost.y*20 + "px";
}
function displayScore(){
    document.getElementById('score').innerText = score;
}
function displayLives(){
    document.getElementById('lives').innerText = lives;
}


// delay functionality from https://blog.gitnux.com/code/javascript-wait-function/#:~:text=async%2Fawait%60%3A-,function%20wait(milliseconds)%20%7B%20return%20new%20Promise((resolve),be%20displayed%20after%201000%20milliseconds. 

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function moveGhost(){
    let dir = Math.floor(Math.random()*ghost.direction.length);
    if (dir == 0 && ghost.x < world[0].length-1){
        ghost.x += ghost.direction[Math.floor(Math.random()*ghost.direction.length)];
    }
    else if (dir == 1 && ghost.y < world.length-1){
        ghost.y += ghost.direction[Math.floor(Math.random()*ghost.direction.length)];
    }
    else if(dir == 0){
        ghost.x--;
    }
    else if(dir == 1) {
        ghost.y++;
    }
    if (ghost.x <1){
        ghost.x=1;
    }
    else if(ghost.x>world[0].length-1){
        ghost.x = world[0].length-1;
    }
    if (ghost.y < 1){
        ghost.y = 1;
    }
    else if(ghost.y>world.length-1){
        ghost.y = world.length-1;
    }
    displayGhost();
    await delay(500);
    moveGhost();
    
}

displayWorld();
displayPacman();
displayPacman2();
displayScore();
displayLives();
displayGhost();
// moveGhost();
moveGhost();

document.onkeydown = function(e) {
    console.log(e.keyCode);
    if (e.keyCode == 37 && world[pacman.y][pacman.x-1]!=2){
        pacman.x --;
        document.getElementById('pacman').style.rotate = "180deg";
    }
    else if (e.keyCode == 38 && world[pacman.y-1][pacman.x]!=2){
        pacman.y --;
        document.getElementById('pacman').style.rotate = "270deg";
    }
    else if (e.keyCode == 39 && world[pacman.y][pacman.x+1]!=2){
        pacman.x ++;
        document.getElementById('pacman').style.rotate = "0deg";
    }
    else if (e.keyCode == 40 && world[pacman.y+1][pacman.x]!=2){
        pacman.y ++;
        document.getElementById('pacman').style.rotate = "90deg";
    }

    // pacman 2 
    if (e.keyCode == 65 && world[pacman2.y][pacman2.x-1]!=2){
        pacman2.x --;
        document.getElementById('pacman2').style.rotate = "180deg";
    }
    else if (e.keyCode == 87 && world[pacman2.y-1][pacman2.x]!=2){
        pacman2.y --;
        document.getElementById('pacman2').style.rotate = "270deg";
    }
    else if (e.keyCode == 68 && world[pacman2.y][pacman2.x+1]!=2){
        pacman2.x ++;
        document.getElementById('pacman2').style.rotate = "0deg";
    }
    else if (e.keyCode == 83 && world[pacman2.y+1][pacman2.x]!=2){
        pacman2.y ++;
        document.getElementById('pacman2').style.rotate = "90deg";
    }

    // collision 
    if (world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score+=10;
    }
    if (world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0;
        score+=50;
    }
    if (world[pacman2.y][pacman2.x] == 1){
        world[pacman2.y][pacman2.x] = 0;
        score+=10;
    }
    if (world[pacman2.y][pacman2.x] == 3){
        world[pacman2.y][pacman2.x] = 0;
        score+=50;
    }
    if (pacman.x == ghost.x && pacman.y == ghost.y){
        lives--;
    }
    if (pacman2.x == ghost.x && pacman2.y == ghost.y){
        lives--;
    }
    displayWorld();
    displayPacman();
    displayPacman2();
    displayScore();
    displayLives();
    displayGhost();
    console.log(ghost);
}