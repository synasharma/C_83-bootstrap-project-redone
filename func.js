var mouse_event="";
var last_x;
var last_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var width1 = screen.width;
var height1 = screen.height;
var new_width = width1 - 150;
var new_height = height1 - 300;
if (screen.width < 992) {
  document.getElementById("myCanvas").width = new_width;
  document.getElementById("myCanvas").height = new_height;
  document.body.style.overflow = "hidden";
}
color = "black";
width_of_line = 2;
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {
  color = document.getElementById("color_input").value;
  width_of_line = document.getElementById("width_input").value;
  last_x=e.touches[0].clientX-canvas.offsetLeft;
  last_y=e.touches[0].clientY-canvas.offsetTop;
  
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
  current_position_of_mouse_x = e.touches[0].clientX - offsetLeft;
  current_position_of_mouse_y = e.touches[0].clientY - offsetTop;
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width_of_line;
  ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y);
  ctx.stroke();
 console.log("Current position of x and y coordinates");
 console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
}

  canvas.addEventListener("mousedown",my_mousedown);
  function my_mousedown(e)
  {
    mouse_event="mouseDown";
    color=document.getElementById("color_input").value;
   width_of_line=document.getElementById("width_input").value;
  }
  function clear_area()
{
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
 canvas.addEventListener("mouseup",my_mouseup);
 function my_mouseup(e)
  {
    mouse_event="mouseUp";
  }
   canvas.addEventListener("mouseleave",my_mouseleave);
 function my_mouseleave(e)
  {
    mouse_event="mouseLeave";
  }
   canvas.addEventListener("mousemove",my_mousemove);
 function my_mousemove(e)
  {
  current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
  current_position_of_mouse_y=e.clientY-canvas.offsetTop;
   if(mouse_event=="mouseDown")
     {
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=width_of_line;
       ctx.moveTo(last_x,last_y);
       ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
       ctx.stroke();
     }
    last_x=current_position_of_mouse_x;
    last_y=current_position_of_mouse_y;
  }