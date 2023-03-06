function draw_one_frame(cur_frac) {
	noStroke()
	let backgroundColor = color("#dbbea1")
	fill(backgroundColor)
	rect(0,0, width, height)
	////////////////////////////////////////////
	let mainColor = color("#3F292B") // brown
	let backupColor = color("#D34F73") // blush
	let DetailColor = color("#DB7F67")
	
	
	let noiseColor;
	let noiseyColor; 
	let moveXMap;
	
	
	let orbSize = width / 20
	let spacingSize = width / 19
	
	//////////////////////////////////////////////
	fill(mainColor)
	
	for(let accross = 1; accross < width /spacingSize; accross++ ){
		for(let down = 1; down +1 < height /spacingSize; down++){		
			
		noiseColor = getNoiseValue(spacingSize*accross,spacingSize*down, 0.8, "noiseColor",0,1, 200 )
		noiseyLerp = lerpColor(mainColor,backupColor,noiseColor)  // https://p5js.org/reference/#/p5/lerpColor
		fill(noiseyLerp)
		ellipse(spacingSize*accross,spacingSize*down ,orbSize)
	
			if(cur_frac > 0.3 && noiseColor < 0.3){
				fill(225)
				moveXMap = map(cur_frac,0.3, 1, spacingSize*accross, spacingSize*(accross+1))
				ellipse(moveXMap,spacingSize*down,orbSize/2) 
			}
		}
	}
	
	}
	
	