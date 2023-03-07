function draw_one_frame(cur_frac) {
	noStroke()
	let backgroundColor = color("#4C061D") // burnt red
	fill(backgroundColor)
	rect(0,0, width, height)
	////////////////////////////////////////////
	let TopColor = color("#2F4858");// dark blue
	let Leftcolor = color("#F6AE2D"); // mustard yellow
	let Rightcolor = color("#F26419"); // ORANGE ORANGE

	
	let noiseyColor;
	///////////////////////////////////////////

	let rectSize = width / 12
	let SpaceSize = width /6
	
	///////////////////////////////////////////

	fill(Leftcolor) // yellow

for( let across = 0; across < width / SpaceSize; across++){
	for( let down = 0; down < height / SpaceSize; down++){

		let noiseColor = getNoiseValue(SpaceSize*across,SpaceSize*down,0.8, "noiseColor",0,3)
		rect(SpaceSize*across,SpaceSize*down-25, rectSize, rectSize)
		rect(SpaceSize*across + 80,SpaceSize*down+55, rectSize, rectSize)
		
		
		

	}
}
	
fill(TopColor); //blue
for( let across= 0 ; across < width / SpaceSize+0.5; across++){
	for( let down = -1; down < height / SpaceSize+3; down++){

quad(SpaceSize*across-80,SpaceSize*down-65,SpaceSize*across-160,SpaceSize*down-25,SpaceSize*across-80,SpaceSize*down+15,SpaceSize*across,SpaceSize*down-25)
		let noiseColor = getNoiseValue(SpaceSize*across,SpaceSize*down,0.8, "noiseColor",0,3)
		//rect(SpaceSize*across,SpaceSize*down-90, rectSize, rectSize)
		//rect(SpaceSize*across + 80,SpaceSize*down-10, rectSize, rectSize+10)
		
		

	}
}


//	let noiseColor;
//	let noiseyColor; 
//	let moveXMap;
	
	
	//let rectSize = width / 20
	//let spacingSize = width/20
	
	//////////////////////////////////////////////
//	fill(TopColor)
	
	//for(let across = 1; across < width /spacingSize; across++ ){
//		for(let down = 1; down +1 < height /spacingSize; down++){		
			
//		noiseColor = getNoiseValue(spacingSize*across,spacingSize*down, 0.8, "noiseColor",0,1, 200 )
//		noiseyLerp = lerpColor(TopColor, Leftcolor,Rightcolor)  // https://p5js.org/reference/#/p5/lerpColor
//		fill(noiseyLerp)
//		rect(spacingSize*across,spacingSize*down ,rectSize)
	
//			if(cur_frac > 0.3 && noiseColor < 0.3){
//				fill(225)
//				moveXMap = map(cur_frac,0.3, 1, spacingSize*across, spacingSize*(across+1))
//				rect(moveXMap,spacingSize*down,rectSize/2) 
//			}
//		}
//	}
	
	}
	
	