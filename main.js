canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var last_position_x, last_position_y;
color = "black";

width_of_line = 1;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value ;
    width_of_line = document.getElementById("width_of_line").value ;
    mouseEvent = "mouseDown"; 
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_postion_of_x = e.clientX- canvas.offsetLeft;
    current_postion_of_y = e.clientY- canvas.offsetTop;

    if (mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_x, last_position_y);
        ctx.lineTo(current_postion_of_x, current_postion_of_y);
        ctx.stroke();
    }

    last_position_x = current_postion_of_x;
    last_position_y = current_postion_of_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){

    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseLeave";
}

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}