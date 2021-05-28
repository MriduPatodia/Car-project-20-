function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "grey"
  wall = createSprite (790, 200, 20, height/2)
  wall.shapeColor = "black"
speed = random (55, 80)
weight = random (400, 1500)
car.velocityX = speed 
}

function draw() {
  background(255,255,255);  
  if (wall.x - car.x <= (car.width + wall.width)/2){
    car.velocityX = 0
    deformation = (.5 * weight * speed * speed)/22500
  if (deformation > 180){
    car.shapeColor = "red"
  }
  if (deformation <180 && deformation >100){
    car.shapeColor = "yellow"
  }
  if (deformation < 100){
    car.shapeColor = "green"
  }
}
  drawSprites();
}

50, 20
