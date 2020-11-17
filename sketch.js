var fixedRect, movingRect;

var gameObject1, gameObject2, gameObject3, gameObject4;


function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(400,100, 50, 80);
  fixedRect.shapeColor = "yellow";
  fixedRect.velocityY=+5;

  movingRect = createSprite(400,800,80,30)
  movingRect.shapeColor = "yellow";
  movingRect.velocityY=-5;

  gameObject1= createSprite(100,100,50,50);
  gameObject1.shapeColor = "lime";

  gameObject2= createSprite(200,100,50,50);
  gameObject2.shapeColor = "lime";

  gameObject3= createSprite(300,100,50,50);
  gameObject3.shapeColor = "lime";

  gameObject4= createSprite(600,100,50,50);
  gameObject4.shapeColor = "lime";

}

function draw() {
  background(0,0,0);  
  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY; 

 
        if(isTouching(movingRect, gameObject1)){

          gameObject1.shapeColor="blue";
          movingRect.shapeColor="blue";

        }
        else{
          gameObject1.shapeColor="red";
          movingRect.shapeColor="red";

        }

        bounceOff(movingRect,fixedRect);

  drawSprites();
}







