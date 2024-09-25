let board;
let boardWidth = 360;
let boardHeight = 576;
let context;

let jumperWidth = 40;
let jumperHeight = 40;
let jumperX = boardWidth/2 - jumperWidth/2;
let jumperY = boardHeight*7/8 - jumperHeight;
let jumper_body

let platformArray = [];
let platformWidth = 60;
let platformHeight = 18;
let platformImg;

let jumper = {
    img : null,
    x: jumperX,
    y: jumperY,
    width : jumperWidth,
    height: jumperHeight
}

window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

/* (Place holder)
    context.fillStyle = "green";
    context.fillRect(jumper.x, jumper.y, jumper.width, jumper.height);
*/

    jumper_body = new Image();
    jumper_body.src = "./character.png";
    jumper.img = jumper_body;
    jumper_body.onload = function() {
        context.drawImage(jumper.img, jumper.x, jumper.y, jumper.width, jumper.height);
    }

    platformImg = new Image();
    platformImg.src = "./platform.png";

    placePlatForms();
    requestAnimationFrame(update);


}


function update() {
    requestAnimationFrame(update);

    for (let i = 0; i < platformArray.length; i++){
        let platform = platformArray[i];
        context.drawImage(platform.img, platform.x, platform.y, platform.width, platform.height);
    }
}


function placePlatForms() {
    platformArray = [];

    let platform = {
        img: platformImg,
        x: boardWidth/2,
        y: boardHeight - 50,
        width: platformWidth,
        height: platformHeight
    }
    platformArray.push(platform);


    platform = {
        img: platformImg,
        x: boardWidth/2,
        y: boardHeight - 150,
        width: platformWidth,
        height: platformHeight
    }
    platformArray.push(platform);
    
    platform = {
        img: platformImg,
        x: boardWidth/2,
        y: boardHeight - 250,
        width: platformWidth,
        height: platformHeight
    }
    platformArray.push(platform);

    platform = {
        img: platformImg,
        x: boardWidth/2,
        y: boardHeight - 350,
        width: platformWidth,
        height: platformHeight
    }
    platformArray.push(platform);
}
