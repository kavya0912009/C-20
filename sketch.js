var a,b;



function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(200,200,50,50);
  a.shapeColor = "green";
  b.shapeColor = "green";

}

function draw() {
  background(255,255,255); 
  
  
  a.x = mouseX;
  a.y = mouseY;

  console.log(a.y - b.y);

  if (a.x - b.x < 49 && b.x-a.x < 49 && a.y - b.y < 50 && b.y - a.y < 50){
    a.shapeColor = "red";
  b.shapeColor = "red";
  }
else {
  a.shapeColor = "green";
  b.shapeColor = "green";
}
  drawSprites();
}