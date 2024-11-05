const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const rocketshipImg = new Image();
rocketshipImg.src = "rocketship.png";

let ship = {
    x:0, y:150
};

let cnt = 10;
let timer;
let animationFrameId;

rocketshipImg.onload = function(){
    draw();
}

document.getElementById("launch").onclick = function(){
    DisplayTimer();
}

function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    //draw sky
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //draw grass
    ctx.fillStyle = "green";
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
    ctx.drawImage(rocketshipImg, ship.x, ship.y);
}

function update(){
    if(ship.y > -256){
        ship.y -= 5;
    }
    else{
        cancelAnimationFrame(animationFrameId);
    }
    
}

function loop(){
    draw();
    update();

    animationFrameId = requestAnimationFrame(loop);
}

function DisplayTimer(){
    document.getElementById("display").textContent = `Count: ${cnt}`;
    cnt --;
    timer = setTimeout(DisplayTimer, 1000);
    if(cnt <=0){
        clearTimeout(timer);
        loop();
    }
}




