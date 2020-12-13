const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var ground;
function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1600,2000);

  ground = new Ground(700,1200,width,15);

   //create division bodies
   for (var i = 390; i <= 1010; i = i + 80){
    divisions.push(new Division(i, 945, 10, 500));
  }


  //create plinko bodies
  
  
  for (var j = 400 ; j <= 800; j = j + 50){
    plinkos.push(new Plinko(j, 300));
  }
  console.log(plinkos);
  for (var j = 350; j <= 800 - 10; j = j + 50){
    plinkos.push(new Plinko(j, 400));
  }
  for (var j = 400; j <= 800; j = j + 50){
    plinkos.push(new Plinko(j,500));
  }
  for (var j = 350; j <= 800 - 10; j = j + 50){
    plinkos.push(new Plinko(j, 600));
  }
}

function draw() {
  Engine.update(engine);
  background(255);  
 
  ground.display();
 
  if(frameCount%60 === 0){
    particles.push(new Particle(random(500, width/2+10), 10,10));
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  
  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }
  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }
  drawSprites();
}