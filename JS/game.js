class Game{
    constructor(){
        this.background = new Background()
        this.backgroundclouds = []
        this.backgroundImages = []
        this.floor = []
        this.bird = new Bird()
        this.obstacles = []
        let score = 0;
    }
    
    preload(){
        this.backgroundImages= [
            {src: loadImage('flappyback.png'), x: 0, y:0, speed:1 },
        ]
        this.floor= [
            {src: loadImage('flapgroundnew.png'), x: 0, y:735, speed:2 },
        ]
        this.backgroundclouds = [
          {src: loadImage('cloudstry2.png'), x: 1200, y:0, speed:5 },
        ]
        this.playerImage = loadImage('flappy.gif')
        this.pipes = [
            loadImage('pipe.png'), loadImage('pipeF.png') 
        ]
    }
    draw(){
        clear()
        this.background.draw()  
        this.bird.draw()
        this.menu
        if (frameCount % 125 === 0) {
			this.obstacles.push(new Obstacle(this.pipes[0],this.pipes[1]))
		}
        this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})
        //this.obstacles.forEach(obstacle => obstacle.collision(this.bird))
        for(let i = 0; i < this.obstacles.length; i++){
            if(this.obstacles[i].collision(this.bird)){
                // this.obstacles = []
                MENU = 0;
                start = false;
                game = new Game()
            }
        }
       
        this.obstacles = this.obstacles.filter((obstacle) => {
			if ( obstacle.x < -60) {
				return false
			} else {
				return true
			}
		})    
    }
}