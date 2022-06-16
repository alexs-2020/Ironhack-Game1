let MENU = 0
let game = new Game()
let start = false;
let score = 0;

function preload() {
    
  }

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
  text(score, 580,350)
}
//textFont("name")
 
  if (MENU == 1) {
    text('Right Click to return to MENU', 525, 30)
    if (mouseButton == RIGHT) {
      MENU = 0
    }
  } // START GAME
  if (MENU == 2) {
    game.preload()
    start = true
    console.log(start)
    MENU = undefined;
    if (mouseButton == RIGHT) {
      MENU = 0
    }
  } // INSTRUCTIONS
  if (MENU == 3) {
    text('COME AGAIN SOON!', 25, height / 2)
  } // EXIT 
  if (start){
    game.draw()
   }
}

function mouseClicked() {
  if (MENU == 0) {
    if (mouseY > 460 && mouseY <500) {
        if (mouseX >485 && mouseX <715) {
            MENU = 3;
        }
    }
    if (mouseY > 400 && mouseY < 440) {
        if (mouseX < 585 && mouseX > 485) {
          MENU = 2
       
        }
        if (mouseX < 715 && mouseX > 615) {
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