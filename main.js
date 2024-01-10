function preload(){

}

function setup(){
    canvas= createCanvas (640,480);
    canvas.position(450,300);
    video= createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    image (video,0,0,640,480);
    tint(tint_color);
}

function take_snapshot(){
    save('color_filter.png');
}
function filter_tint()
{
    tint_color= document.getElementById("color_name").value;
}