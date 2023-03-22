function draw_one_frame(cur_frac) {
  let TheNoise = getNoiseValue(150,200,0.5,"TheNoise",0,10,10)

  //////////////////////////Colour/////////////////
  let LeftShade = color(200,200,100);
  let RightShade = color(250,250,200);
  let TopShade = color(250,250,0);
  
  /////////////Background//////////
  noStroke();

  fill(250, 200, 0);
  rect(0, height/2, width, height/2);

  
  //cube  top left start

  fill(LeftShade); //left
  rect (100,100,50,100);
 
fill(RightShade); //right
rect (150,100,50,100);

fill(TopShade);
quad(100,100, 150,130 ,200,100, 150, 70); // top 

//cube top left end

  //cube  top right start

  fill(LeftShade); //left
  rect (200,100,50,100);
   
  fill(RightShade); //right
  rect (250,100,50,100);
   
  fill(TopShade);
  quad(200,100, 250,130 ,300,100, 250, 70); // top side
  
 //cube top right end

  //cube bottom left start

  fill(LeftShade); //left
  rect (50,200,50,70);

  fill(RightShade); //right
  rect (100,200,50,70);

  fill(TopShade);
  quad(50,200, 100,230 ,150,200, 100, 170); // top 

  //cube bottom left end

    //cube bottom center start

    fill(LeftShade); //left
    rect (150,200,50,70);
  
    fill(RightShade); //right
    rect (200,200,50,70);
  
    fill(TopShade);
    quad(150,200, 200,230 ,250,200, 200, 170); // top 

  //cube bottom center end

  //cube bottom right start

    fill(LeftShade); //left
    rect (250,200,50,70);
  
    fill(RightShade); //right
    rect (300,200,50,70);
  
    fill(TopShade);
    quad(250,200, 300,230 ,350,200, 300, 170); // top 

  //cube bottom right end
  

  strokeWeight(10);
  let grid_points = [
    0.2 * height,
    0.4 * height,
    1.0 * height
  ]
  fill(RightShade);

  /// extending rectangles
  strokeWeight(0);
  stroke(0);
  for(let i=0; i<5; i++) {
    let upwards_extension = map(cur_frac, 0, 0.47, grid_points[i], grid_points[i+1])
    line(0, upwards_extension, width, upwards_extension);
    rect(200,270,50, upwards_extension/-4) // extending rectangle right
  
  }
  fill(LeftShade); //left
  strokeWeight(0);
  stroke(0);
  for(let i=0; i<grid_points.length-1; i++) {
    let upwards_extension2 = map(cur_frac, 0, .47, grid_points[i], grid_points[i+1])
    line(0, upwards_extension2, width, upwards_extension2);
    rect(150,270,50, upwards_extension2/-4) // extending rectangle left
  
  }
  fill(TopShade);
  for(let i=0; i<6; i++) {
    let upwards_extension3 = map(cur_frac, 0, 1, grid_points[i], grid_points[i+1])
    line(0, upwards_extension3, width, upwards_extension3);
    // extending quad top
    quad(150,200- upwards_extension3/4, 200,230- upwards_extension3/4 ,250,200- upwards_extension3/4, 200, 200 - upwards_extension3/4);
  
  }

  
}