function draw_one_frame(cur_frac) {
	noStroke()
	let backgroundColor = color("#4C061D") // burnt red
	fill(backgroundColor)
	rect(0,0, width, height)
	////////////////////////////////////////////
	let TopColor = color("#2F4858");// dark blue, unused
	let Leftcolor = color("#F6AE2D"); // mustard yellow
	let Rightcolor = color("#F26419"); // vibrant orange
	let StrokeColour = 250 // white
	let StrongStroke = width/190 // define so stroke keeps its weight in different canvas sizes
	let noiseyColor;
	let noiseyLerp;

	let fromOrange = color(242,100,25);
	let toRed = color(76,6,29)

	//unused
	let moveMap = map(cur_frac, 0, 1, -30, 220) // Use later?
    let moveMapX,moveMapY;
	let moveXMap;
	/// /\/\/\/\

	/////////////////////////////////////////// this needs to be tidied

	let rectMapValue1 = 2.5
	let rectMapValue2 = 0.5525

	let rectSize = width / 12 // 
	let rectSize2 = width / 7.5 // 8 STUPID
	let SpaceSize = width /6
	let SpaceSize2 = width/12+0.5 // 6 + 0.4? this is used for other loops in order to get the size just right, and so that it fits in the different formats of sizing.
	let spaceSize3 = width / 3.75 // 4 same here STUPID

	let quadMapValue1 = 2.5
	let quadMapValue2 = 0.499

	let quadX1Size = width/6 // I have to create varibles for all the quad points otherwise the size doesnt work in the different formats
	let quadY1Size = width/12
	let quadX2Size = width/12
	let quadY2Size = width/8
	let quadX3Size = width/12
	let quadY3Size = width/24
	let quadX4Size = width/768
	let quadY4Size = width/12

	let quadOnSetX = width/6 // 160
	let quadOnSetY = width/3.84 // 250
	let quadOffsetX = width/-12 //-80
	let quadOffsetY = width/7.56 //127

	/////////////////////////////////////////// tidy up

	let Keyframes = [ // used for a for loop but doesn't seem to do anything
		-0.425 * width,
		0.125 * width,
		//0.3 * width, // new
		0.625 * width, // 0.625
		1.125 * width // 1,125
	]


// unused
	let Keyframes2 = [
		//-0.325 * width, // 1.125
		//0.125 * width, // 0.625
		//1.25 * width, // new
		//0.8 * width, // 01.25
		//3.325 * width // -0.425
		-0.25 * width,
    0.0 * width,
    0.25 * width,
    0.50 * width,
    0.75 * width,
    1.00 * width,
	-0.25 * width
	]
let movingUpMap = map(cur_frac, 0,1,0.5, 2.5)

let myMap; 
if(cur_frac <= 0.5){
myMap = map(cur_frac, 0, 0.5, 0, 225)
}
else{
myMap = map(cur_frac, 0.5,1, 225,0)
}

// /\/\/\/\/\/\
	

fill(Leftcolor) // mustard yellow rectangles
stroke(StrokeColour)
strokeWeight(StrongStroke) // 5
for(let i=0; i<5; i++) {
    let upwards_extension = map(cur_frac, rectMapValue1, rectMapValue2, Keyframes[0], Keyframes[1]) // Rectangle Moving upwards map
		for( let across = 0 ; across < width / SpaceSize; across++){
			for( let down = -0.75; down < height / SpaceSize; down++){ // -0.75 for the other rectangles t fit diagnolly.
				let noiseColor = getNoiseValue(SpaceSize*across,SpaceSize*down,0.8, "noiseColor",0,3) // are you using this or not
			
					rect(SpaceSize*across,spaceSize3*down + upwards_extension , rectSize, rectSize2 )
	}
}
}

	
fill(Leftcolor); // mustard yellow rectangles but placed on a diangnol offeset to appear as a checkerboard
for(let i=0; i<5; i++) {
    let upwards_extension = map(cur_frac, rectMapValue1, rectMapValue2, Keyframes[0], Keyframes[1]) // 2.5, 0.5, Keyframes[i], Keyframes[i+1] // Rectangle Moving upwards map
		for( let across= -0.5 ; across < width / SpaceSize2; across++){ // 0.5 for offset
			for( let down = -1.25; down < height / SpaceSize2; down++){ // -1.25 for offset
				let noiseColor = getNoiseValue(SpaceSize*across,SpaceSize*down,0.8, "noiseColor",0,3) // for later perhaps
				
					rect(SpaceSize*across ,spaceSize3*down+ upwards_extension, rectSize, rectSize2)
			
	}
}
}


fill(Rightcolor); // vibrant orange quads.
//for (let i = 1; i<Keyframes.length; i++){ // trying to use the OG map but doesn't work // GET RID OF
for(let i=0; i<5; i++) {
    let upwards_extension = map(cur_frac,quadMapValue1,quadMapValue2, Keyframes[0], Keyframes[1]) // map(cur_frac, 2.5, 0.5, Keyframes[0], Keyframes[1]) // moves the quads upwards. Has to be applied on each Y value
		for( let across= 0; across < width / SpaceSize2; across++){
			for( let down = -1.5; down < height / SpaceSize; down++){
				// let noiseColor = getNoiseValue(SpaceSize,spaceSize3,0.8, "noiseColor",0,3) // decide to use it or not
				// 	noiseyLerp = lerpColor(toRed, fromOrange, myMap)  // https://p5js.org/reference/#/p5/lerpColor
				// 	fill(noiseyLerp)
				push();
				translate(across * quadOnSetX, down * quadOnSetY) // repeats the first seet of quads across and down
					quad(quadX2Size , quadY2Size + upwards_extension,quadX1Size, quadY1Size + upwards_extension,quadX3Size ,quadY3Size + upwards_extension, quadX4Size, quadY4Size + upwards_extension)	
					pop(); // push and pop so that i can sue translate twice whikst not affecting the other.
					
					push()
					translate(quadOffsetX,quadOffsetY) // another translate to offset more quads so that are slighlty diagnol and line up with the rectangular chekcerboard.
					push()
					translate(across * quadOnSetX, down * quadOnSetY); // repeats the second set of quads across and down
						quad(quadX2Size , quadY2Size + upwards_extension,quadX1Size, quadY1Size + upwards_extension,quadX3Size ,quadY3Size + upwards_extension, quadX4Size, quadY4Size + upwards_extension)	
						pop();
						pop();
					
	}
}
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
	
	
	
	