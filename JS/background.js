class Background{
    draw(){
        game.backgroundImages.forEach(function(img){
            img.x -= img.speed
                image(img.src,img.x,img.y,width,height)
                image(img.src,img.x+width,img.y,width,height)
            if (img.x <= -(width)) {
                img.x=0;
            }
        })
        game.backgroundclouds.forEach(function(img){
			img.x -= img.speed
			image(img.src, img.x, img.y, 200, 100)
			if (img.x <= -200) {
				img.x = 1200
                img.y = Math.random()*350
			}
		})
        game.floor.forEach(function(img){
            img.x -= img.speed
            image(img.src,img.x,img.y,width,60)
            image(img.src,img.x+width,img.y,width,60)
        if (img.x <= -(width)) {
            img.x=0;
        }
		})
    }
}