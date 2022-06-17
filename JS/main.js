let MENU = 0
let game = new Game()
let start = false;
let score = 0;


function setup() {
    createCanvas(1200,800)
    background(0,181,226)
}

function draw() {
    if(MENU == 0){
        //start square
        fill(235, 93, 6); 
        rect(485, 400, 100, 40); 
        //share
        fill(235, 93, 6); 
        rect(615, 400, 100, 40);
        //lead
        fill(235, 93, 6); 
        rect(485, 460, 230, 40);
        //score
        fill(235, 199, 127); 
        rect(550,250,100,125)
        textSize(28) 
        fill(255);
        text('START', 490, 430);
        text('SHARE', 617, 430);
        text('LEADERBOARD', 495,489);
        textSize(25)
        fill(235, 93, 6); 
        text('SCORE', 555,280);
        fill(255); 
        textSize(70)
        if(score<10){text(score, 580,350)}
        else{text(score, 557,350)}
    }
//textFont("name")
 
  // START GAME
  if (MENU == 1) {
    game.preload()
    start = true
    console.log(start)
    MENU = undefined;
    score = 0;
    if (mouseButton == RIGHT) {
      MENU = 0
    }
  } 
  if (start){
    game.draw()
   }
}

function mouseClicked() {
  if (MENU == 0) {
    if (mouseY > 400 && mouseY < 440) {
        if (mouseX < 585 && mouseX > 485) {
          MENU = 1
        }
    }
  }
}

function keyPressed(){
    if (keyCode === 32) {
		game.bird.jump()
	}
}