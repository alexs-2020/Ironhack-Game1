class Obstacle {
    constructor(image1,image2){
        this.image1 = image1
        this.image2 =image2
        this.x = 1200;
        this.y = 300+Math.random()*400;
        this.height = 300;
        this.width = 60;
    }
    
    draw(){
        this.x = this.x - 2
        this.height = 740-this.y
        this.heightF = this.y - 150
        image(this.image1, this.x, this.y, this.width, this.height)
        image(this.image2, this.x, 0, this.width, this.heightF)
    }

    collision(playerInfo) {
		const obstacleX = this.x
		const obstacleFY = this.heightF
        const obstacleY= this.y 
		const playerX = playerInfo.x  +playerInfo.width / 2
		const playerY = playerInfo.y +playerInfo.height / 2
      
        console.log( dist(playerY,playerX+75,obstacleX,obstacleY))
        if(playerY < obstacleFY || playerY >  obstacleY || playerY > 740){
            if(playerX>obstacleX && playerX <obstacleX+this.width){
		    console.log('colission')
		    return true}
		} else {
            return false
        }
    }

}

// || playerY < obstacleY-150 && playerX > obstacleX && playerX < obstacleX+this.width||playerY < obstacleY-150 && playerX+75 >obstacleX && playerX+75< obstacleX+this.width||


//playerY > obstacleY && playerX > obstacleX && playerX < obstacleX + this.width||playerY +75 >= obstacleY && playerX+75 > obstacleX && playerX+75 < obstacleX + this.width|| playerY < obstacleY-150 && playerX > obstacleX && playerX < obstacleX+this.width|| playerY +75 > 740)