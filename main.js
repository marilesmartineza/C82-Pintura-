var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
   
color="black";
width_of_line=3;
radius=5;
 
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
 {
    color = document . getElementById("color") . value;
    width_of_line =document. getElementById("width_of_line") . value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}    

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;
   
        if (mouseEvent == "mouseDown") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;
            ctx.moveTo(last_position_of_x, last_position_of_y);
            ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
            ctx. arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 ,2 * Math. PI);
            ctx.stroke();
        }
   
        last_position_of_x = current_position_of_mouse_x;
        last_position_of_y = current_position_of_mouse_y;


    }
    
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouseEvent = "mouseUP";
}
 
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseup(e)
{
        mouseEvent = "mouseleave";
}
 
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function alerta() {
    window.alert("Saca a tu artista interior y manda tus dibujitos a ig (ale_mariles_)");
  }
