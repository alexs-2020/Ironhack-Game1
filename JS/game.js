class Game{
    constructor(){
        this.background = new Background()
        this.backgroundclouds = []
        this.backgroundImages = []
        this.floor = []
        this.bird = new Bird()
        this.obstacles = []
        this.menu = true
        this.sound = new Audio("cowMoo.mp3")
    }
    
    preload(){
        this.sound.play()
        this.backgroundImages= [
            {src: loadImage('flappyback.png'), x: 0, y:0, speed:1 },
        ]
        this.floor= [
            {src: loadImage('flapgroundnew.png'), x: 0, y:735, speed:2 },
        ]
        this.backgroundclouds = [
          {src: loadImage('cloudstry2.png'), x: 1200, y:0, speed:5 },
          //{src: loadImage('clouds4.jpg'), x: 1200, y:0, speed:3}
        ]
        this.playerImage = loadImage('cow.gif')
        this.pipes = [
           loadImage('pipe.png'), loadImage('pipeF.png') 
        ]
    }
    draw(){
        clear()
        this.background.draw()  
        this.bird.draw()
        if (frameCount % 125 === 0) {
			this.obstacles.push(new Obstacle(this.pipes[0],this.pipes[1]))
		}
        this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})
        for(let i = 0; i < this.obstacles.length; i++){
            if(this.obstacles[i].collision(this.bird)){
                // this.obstacles = []
                MENU = 0;
               this.menu=false
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
        if(this.menu){
            console.log(this.menu)
           if(score<10){text(score, 580,200)}
           else{text(score, 557,200)}
       }   
    }
}