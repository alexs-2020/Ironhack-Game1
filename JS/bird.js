class Bird {
    constructor(){
        this.height = 100;
        this.width = 100;
        this.x =175;
        this.y = 400;
        this.gravity = 0.2
        this.velocity = 0;
    }
    draw(){
        this.velocity += this.gravity
		this.y += this.velocity
        if (this.y >= height - this.height) {
			// reset him to the starting position
			this.y = height - this.height
		}
        image(game.playerImage, this.x, this.y, this.width, this.height)
      
    }
    jump() {
        console.log('jump')
        // this.y -= 30
        this.velocity = -5
    }
}