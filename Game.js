class Game {
  constructor() {
this.resetButton=createButton("resetButton")
this.resetTitle=createElement("h2")
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
    this.resetTitle.html("reset")
    this.resetTitle.position(width-250,20)
    this.resetTitle.class("greeting")
    this.resetButton.class("customButton")
    this.resetButton.position(width-250,50)
  } 
  play() 
  {
     this.handleElements();
    this.handleResetPress()
      Player.getPlayersInfo();

      if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);
 var index=0
 for (var plr in allPlayers)
 {
index=index+1
var x=allPlayers[plr].positionX
var y=height-allPlayers[plr].positionY
cars[index-1].position.x=x
cars[index-1].position.y=y
if(index===player.index)
{
  stroke(5)
  fill("blue")
  rect(x-20,y-20,60,60)
camera.position.x=cars[index-1].position.x
camera.position.y=cars[index-1].position.y
 }
 this.handlePlayerControls()
      drawSprites();
    }
  }
}
 handlePlayerControls()
 {
  if(keyDown(UP_ARROW))
  {
    player.positionY+=10
    player.update()
  }
 }
 handleResetPress()
 {
this.resetButton.mousePressed(()=>{
database.ref("/").set({
gameState:0,
playerCount:0,
players:{}
})        
window.location.reload()
})
 }
}
