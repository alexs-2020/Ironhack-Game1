const game = new Game()

function preload(){
    game.preload()
}
function setup(){
    createCanvas(1200,800)
    background(0,181,226)
}

function draw(){
    game.draw()
}
function keyPressed(){
    if (keyCode === 32) {
		game.bird.jump()
	}
}