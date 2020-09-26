var wall,thickness;
var speed,weight,bullet;
var lbullet,lwall
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(1200, 100, 50, 20);
  bullet.shapeColor = "white" ;
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,42));
  thickness = Math.round(random(22,83));
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80) ;
  bullet.velocityX = speed ;
}

function draw() {
  background("black");
  if(hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
    if(damage > 10) {
      wall.shapeColor = color(255,0,0);
    }
    if(damage< 10) {
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
