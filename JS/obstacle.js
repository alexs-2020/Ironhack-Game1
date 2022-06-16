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
        
        if(playerY + 38 > 740){
            return true
        } 
        if (playerX > obstacleX+this.width && playerX < obstacleX+this.width+2) {
			score+=1
            console.log(score)
        }
        if(playerX+(playerInfo.width/3)>obstacleX&& playerX+(playerInfo.width/2)< obstacleX+this.width){
            if(playerY -30 < obstacleFY || playerY +16> obstacleY ){   
                return true
            }
        } else {
            return false
        }

        if(playerX-(playerInfo.width/2)> obstacleX&& playerX-(playerInfo.width/2)< obstacleX+this.width){
            if(playerY-20 < obstacleFY || playerY +30> obstacleY ){   
                return true
            }
        }
        else{
            return false
        }
        // if(playerY-25 < obstacleFY || playerY +25> obstacleY ){   
        //     if(playerX > obstacleX && playerX < obstacleX+this.width){
		//     console.log('colission')
		//     return true
        //     }   
            
        // }
       
    }
}

// || playerY < obstacleY-150 && playerX > obstacleX && playerX < obstacleX+this.width||playerY < obstacleY-150 && playerX+75 >obstacleX && playerX+75< obstacleX+this.width||


//playerY > obstacleY && playerX > obstacleX && playerX < obstacleX + this.width||playerY +75 >= obstacleY && playerX+75 > obstacleX && playerX+75 < obstacleX + this.width|| playerY < obstacleY-150 && playerX > obstacleX && playerX < obstacleX+this.width|| playerY +75 > 740)