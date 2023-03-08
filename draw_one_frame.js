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

	let moveXMap;

	///////////////////////////////////////////

	let rectSize = width / 12
	let rectSize2 = width / 8
	let SpaceSize = width /6
	let SpaceSize2 = width/6 +0.5
	let spaceSize3 = width / 4

	let quadX1Size = width/6
	let quadY1Size = width/12
	let quadX2Size = width/12
	let quadY2Size = width/8
	let quadX3Size = width/12
	let quadY3Size = width/24
	let quadX4Size = width/768
	let quadY4Size = width/12


	let quadSpaceSize = width/10

	///////////////////////////////////////////

fill(Leftcolor) // yellow Squares
stroke(250)
	for( let across = 0; across < width / SpaceSize; across++){
		for( let down = 0; down < height / SpaceSize; down++){

			let noiseColor = getNoiseValue(SpaceSize*across,SpaceSize*down,0.8, "noiseColor",0,3)
		//rect(SpaceSize*across,SpaceSize*down-25, rectSize, rectSize)
		//rect(SpaceSize*across + 80,SpaceSize*down+55, rectSize, rectSize)
		rect(SpaceSize*across,spaceSize3*down, rectSize, rectSize2)

	}
}
	
fill(Leftcolor); // yellow squares but checkboarded
for( let across= 0.5 ; across < width / SpaceSize2; across++){
	for( let down = 0.5; down < height / SpaceSize2; down++){
		let noiseColor = getNoiseValue(SpaceSize*across,SpaceSize*down,0.8, "noiseColor",0,3)
		
			rect(SpaceSize*across ,spaceSize3*down, rectSize, rectSize2)
			
			if(cur_frac > 0.3 && noiseColor < 0.3){
								fill(225)
								moveXMap = map(cur_frac,0.3, 0.5, spaceSize*across, spaceSize*(across+1))
								rect(moveXMap,spaceSize*down,rectSize/2) 
							}
				
	}
}

fill(Rightcolor); //quads, 
	for( let across= 0.5; across < width / SpaceSize2; across++){
		for( let down = 0.5; down < height / SpaceSize; down++){
			let noiseColor = getNoiseValue(SpaceSize*across,SpaceSize*down,0.8, "noiseColor",0,3)
			translate(0,-80);
				quad(quadX2Size, quadY2Size,quadX1Size, quadY1Size,quadX3Size,quadY3Size, quadX4Size, quadY4Size)	
				translate(0,80);
				quad(quadX2Size, quadY2Size,quadX1Size, quadY1Size,quadX3Size,quadY3Size, quadX4Size, quadY4Size);
				quad(quadX2Size, quadY2Size,quadX1Size, quadY1Size,quadX3Size,quadY3Size, quadX4Size, quadY4Size)	
				translate(160,0);
				quad(quadX2Size, quadY2Size,quadX1Size, quadY1Size,quadX3Size,quadY3Size, quadX4Size, quadY4Size);
				quad(quadX2Size, quadY2Size,quadX1Size, quadY1Size,quadX3Size,quadY3Size, quadX4Size, quadY4Size)	
				translate(0,0);
				quad(quadX2Size, quadY2Size,quadX1Size, quadY1Size,quadX3Size,quadY3Size, quadX4Size, quadY4Size);

				
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
	
	