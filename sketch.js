var bg,bgImg;
var player, Graphite2020Img, shooter_shooting;
var gameState = 0


function preload(){
  
  Graphite2020Img = loadImage("assets/My project.png")
  //shooter_shooting = loadImage("assets/shooter_3.png")

  //bgImg = loadImage("assets/AncientWar.jpg")
  BigBrownRunner = loadAnimation("assets/Run 1.jpg", "assets/Run 2.jpg", "assets/Run 3.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
  game=new Game();
  form=new Form();
  form.display();

  ShooterGroup = new Group()
  EnemyGroup = new Group()

  

//creating the player sprite
   //player.debug = true
   //player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background("white"); 
   if(gameState == 1){
     game.start() 
   }
   
   

   

game.Play()
enemy();
drawSprites();

}

function enemy() {
  if(gameState == 1) {

  
  if(frameCount%50===0){
    Combatman = createSprite(random(500,1100),random(200,1000),40,40)
  
    Combatman.addAnimation("Enemy", BigBrownRunner)
    Combatman.scale = 0.50
    Combatman.velocityX = -3
    //Combatman.debug= true
    //Combatman.setCollider("rectangle",0,0,400,400)
   
    //Combatman.lifetime = 400
   EnemyGroup.add(Combatman)
  }
}
}