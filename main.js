function add() {
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;


    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;


}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.Width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_heigth);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console. log (keyPressed);
    if(keyPreesed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPreesed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPreesed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPreesed == '39')
    {
        rigth();
        console.log("right");
    }


}