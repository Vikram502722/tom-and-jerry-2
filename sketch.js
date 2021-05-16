var canvas,bg;
var together;
var cat, catImg1,catImg2;
var mouse, mouseImg1,mouseImg2;

function preload() {
    bg = loadImage("garden.png");
    catImg1= loadAnimation("cat1.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    catImg3= loadAnimation("cat4.png");
    mouseImg1=loadAnimation("mouse1.png");
    mouseImg2= loadAnimation("mouse2.png","mouse3.png");
    mouseImg3=loadAnimation("mouse4.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite(870, 600);
    cat.addAnimation("tomSleeping", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("jerryStanding", mouseImg1);
    mouse.scale = 0.15;

}

function draw() {

    background(bg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("tomLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("tomLastImage");
        mouse.addAnimation("jerryLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("tomRunning", catImg2);
        cat.changeAnimation("tomRunning");
        
        mouse.addAnimation("jerryTeasing", mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("jerryTeasing");
    }
}
