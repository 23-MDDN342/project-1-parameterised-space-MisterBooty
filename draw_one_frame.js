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

	let moveMap = map(cur_frac, 0, 1, -30, 220) // Use later?
    let moveMapX,moveMapY;
	let moveXMap;

	///////////////////////////////////////////

	let rectSize = width / 12 // 
	let rectSize2 = width / 8
	let SpaceSize = width /6
	let SpaceSize2 = width/6 +0.5 // this is used for other loops in order to get the size just right, and so that it fits in the different formats of sizing.
	let spaceSize3 = width / 4 // same here

	let quadX1Size = width/6 // I have to create varibles for all the quad points otherwise the size doesnt work in the different formats
	let quadY1Size = width/12
	let quadX2Size = width/12
	let quadY2Size = width/8
	let quadX3Size = width/12
	let quadY3Size = width/24
	let quadX4Size = width/768
	let quadY4Size = width/12
	///////////////////////////////////////////

	let Keyframes = [ // used for a for loop but doesn't seem to do anything
		-0.425 * width,
		0.125 * width,
		0.625 * width,
		1.125 * width
	]

	let Keyframes2 = [
		1.125 * width,
		0.625 * width,
		0.125 * width,
		-0.425 * width

	]

	// OG map code? not sure \/\/\/\/

	//for (let i = 0; i<Keyframes.length; i++)
		//shape(Keyframes[i],0,0,0)

fill(Leftcolor) // yellow Squares
stroke(250)
for(let i=0; i<5; i++) {
    let upwards_extension = map(cur_frac, 2.5, 0.5, Keyframes[i], Keyframes[i+1])
	for( let across = 0; across < width / SpaceSize; across++){
		for( let down = 0; down < height / SpaceSize; down++){
			let noiseColor = getNoiseValue(SpaceSize*across,SpaceSize*down,0.8, "noiseColor",0,3)
		//rect(SpaceSize*across,SpaceSize*down-25, rectSize, rectSize)
		//rect(SpaceSize*across + 80,SpaceSize*down+55, rectSize, rectSize)
		rect(SpaceSize*across,spaceSize3*down + upwards_extension, rectSize, rectSize2 )

	}
}
}

	
fill(Leftcolor); // yellow squares but checkboarded. Basically the diagonal ones.
for(let i=0; i<5; i++) {
    let upwards_extension = map(cur_frac, 2.5, 0.5, Keyframes[i], Keyframes[i+1])
for( let across= 0.5 ; across < width / SpaceSize2; across++){ // 0.5 for angle
	for( let down = 0.5; down < height / SpaceSize2; down++){
		let noiseColor = getNoiseValue(SpaceSize*across,SpaceSize*down,0.8, "noiseColor",0,3) // for later perhaps
		
			rect(SpaceSize*across ,spaceSize3*down + upwards_extension , rectSize, rectSize2 )
			
			
				
	}
}
}

fill(Rightcolor); //quads, 
//for (let i = 1; i<Keyframes.length; i++){ // trying to use the OG map but doesn't work
for(let i=0; i<5; i++) {
    let upwards_extension = map(cur_frac, 2.5, 0.5, Keyframes[i], Keyframes[i+1])
	for( let across= 0.5; across < width / SpaceSize2; across++){
		for( let down = 0.5; down < height / SpaceSize; down++){
			let noiseColor = getNoiseValue(SpaceSize*across,SpaceSize*down,0.8, "noiseColor",0,3)
			translate(160, 80); // -80,-40
			//Draw_quad(SpaceSize*across,SpaceSize*down,0) **** This was when i tried to use translate in multiple functions. An idea to come back too
				quad(quadX2Size , quadY2Size + upwards_extension,quadX1Size, quadY1Size + upwards_extension,quadX3Size ,quadY3Size + upwards_extension, quadX4Size, quadY4Size + upwards_extension)	
				//translate(0,0); //+80,120
				//quad(quadX2Size, quadY2Size,quadX1Size, quadY1Size,quadX3Size,quadY3Size, quadX4Size, quadY4Size);
				//translate(160,80); // 160,0
				//quad(quadX2Size, quadY2Size,quadX1Size, quadY1Size,quadX3Size,quadY3Size, quadX4Size, quadY4Size);
				//translate(0,0); // 0,0 
				//quad(quadX2Size, quadY2Size,quadX1Size, quadY1Size,quadX3Size,quadY3Size, quadX4Size, quadY4Size);

				
	}
}
//}
}
}

///********************REFERENCE CODE - either old, examples, doesn't work or an idea to come back to*********************** */
//function Draw_quad(x,y) {
	//push()

	//translate(x,y)
	//quad(quadX2Size, quadY2Size,quadX1Size, quadY1Size,quadX3Size,quadY3Size, quadX4Size, quadY4Size);

//	Pop();

//}

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
//	if(cur_frac > 0.3 && noiseColor < 0.3){
							//	fill(225)
							//	moveXMap = map(cur_frac,0.3, 0.5, spaceSize*across, spaceSize*(across+1))
							//	rect(moveXMap,spaceSize*down,rectSize/2) 
							//}
//			if(cur_frac > 0.3 && noiseColor < 0.3){
//				fill(225)
//				moveXMap = map(cur_frac,0.3, 1, spacingSize*across, spacingSize*(across+1))
//				rect(moveXMap,spacingSize*down,rectSize/2) 
//			}
//		}
//	}
	
	
	
	