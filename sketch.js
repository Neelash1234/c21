var canvas;
var music;
var b1,b2,b3,b4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
b1=createSprite(0,580,350,30)
b1.shapeColor="red"

b2=createSprite(300,580,350,30)
b2.shapeColor="yellow"

b3=createSprite(500,580,350,30)
b3.shapeColor="green"

b4=createSprite(700,580,350,30)
b4.shapeColor="blue"






    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite


drawSprites()
    //add condition to check if box touching surface and make it box
}
