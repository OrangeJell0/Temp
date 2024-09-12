let board;
let boardWidth = 360;
let boardHeight = 576;
let context;

let jumperWidth = 40;
let jumperHeight = 40;
let jumperX = boardWidth/2 - jumperWidth/2;
let jumperY = boardHeight*7/8 - jumperHeight;

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

    context.fillStyle = "green";
    context.fillRect(jumper.x, jumper.y, jumper.width, jumper.height);
}