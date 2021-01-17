var canvas= new fabric.Canvas("MyCanvas");

player_x=10;
player_y=10;

block_imag_width=30;
block_imag_height=30;

var player_object="";
var block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function (IMG){
        player_object=IMG;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set(
            {
                top:player_y,
                left:player_x
            }
        );
        canvas.add(player_object);

    });
}
function new_image(get_img){
    fabric.Image.fromURL(get_img,function (IMG){
        block_img_object=IMG;

        block_img_object.scaleToWidth(block_imag_width);
        block_img_object.scaleToHeight(block_imag_height);
        block_img_object.set(
            {
                top:player_y,
                left:player_x
            }
        );
        canvas.add(block_img_object);

    });
} 
window.addEventListener("keydown",My_keydown);

function My_keydown(e){
        keyPress= e.keyCode;
    console.log(keyPress);
    if(e.shiftKey==true && keyPress=='80'){
        console.log("p and shift pressed toghter");
        block_imag_width=block_imag_width+10;
        block_imag_height=block_imag_height+10;
        document.getElementById("Current_width").innerHTML=block_imag_width;
        document.getElementById("Current_height").innerHTML=block_imag_height;
    }

    if(e.shiftKey==true && keyPress=='77'){
        console.log("m and shift pressed toghter");
        block_imag_width=block_imag_width-10;
        block_imag_height=block_imag_height-10;
        document.getElementById("Current_width").innerHTML=block_imag_width;
        document.getElementById("Current_height").innerHTML=block_imag_height;
    }
    if (keyPress=='38'){
        up();
        console.log("up");
    }
    if (keyPress=='40'){
        down();
        console.log("down");
    }
    if (keyPress=='37'){
        left();
        console.log("left");
    }
    if (keyPress=='39'){
        right();
        console.log("right");
    }
    if (keyPress=='87'){
        new_image("wall.jpg");
        console.log("w");
    }
    if (keyPress=='71'){
        new_image("ground.png");
        console.log("g");
    }
    if (keyPress=='76'){
        new_image("light_green.png");
        console.log("l");
    }
    if (keyPress=='84'){
        new_image("trunk.jpg");
        console.log("t");
    }
    if (keyPress=='82'){
        new_image("roof.jpg");
        console.log("r");
    }
    if (keyPress=='89'){
        new_image("yellow_wall.png");
        console.log("y");
    }
    if (keyPress=='68'){
        new_image("dark_green.png");
        console.log("d");
    }
    if (keyPress=='85'){
        new_image("unique.png");
        console.log("u");
    }
    if (keyPress=='67'){
        new_image("cloud.jpg");
        console.log("c");
    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_imag_width;
        console.log("player's x position="+player_x+"player's y position="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_imag_width;
        console.log("player's x position ="+player_x+"player's y position="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_imag_width;
        console.log("player's x position ="+player_x+"player's y position =" +player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=860){
        player_x=player_x+block_imag_width;
        console.log("player's x position ="+player_x+"player's y position ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}