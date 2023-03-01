function draw_one_frame(cur_frac) {
  let sun_size = canvasHeight/8;

  noStroke();
  fill(100, 100, 214);
  rect(0, 0, width, height);

  fill(255, 255, 0);
  ellipse(width/2, height/2, sun_size);

  fill(0, 200, 0);
  rect(0, height/2, width, height/2);

  
  //cube  top left start

  fill(200,200,100); //left
  rect (100,100,50,100);
 
fill(250,250,200); //right
rect (150,100,50,100);
 
fill(250,250,0);
quad(100,100, 150,130 ,200,100, 150, 70); // top side

//cube top left end

  //cube  top right start

  fill(200,200,100); //left
  rect (200,100,50,100);
   
  fill(250,250,200); //right
  rect (250,100,50,100);
   
  fill(250,250,0);
  quad(200,100, 250,130 ,300,100, 250, 70); // top side
  
 //cube top right end

  //cube bottom left start

  fill(200,200,100); //left
  rect (50,200,50,70);

  fill(250,250,200); //right
  rect (100,200,50,70);

  fill(250,250,0);
  quad(50,200, 100,230 ,150,200, 100, 170); // top side

  //cube bottom left end

    //cube bottom center start

    fill(200,200,100); //left
    rect (150,200,50,70);
  
    fill(250,250,200); //right
    rect (200,200,50,70);
  
    fill(250,250,0);
    quad(150,200, 200,230 ,250,200, 200, 170); // top side

  //cube bottom center end

  //cube bottom right start

    fill(200,200,100); //left
    rect (250,200,50,70);
  
    fill(250,250,200); //right
    rect (300,200,50,70);
  
    fill(250,250,0);
    quad(250,200, 300,230 ,350,200, 300, 170); // top side

  //cube bottom right end
  stroke(0);
  line(width/2, height/2, width/2, height);
  line(0.40*width, height/2, 0.20*width, height);
  line(0.60*width, height/2, 0.80*width, height);

  strokeWeight(10);
  let grid_points = [
    0.50 * height,
    0.53 * height,
    0.60 * height,
    0.75 * height,
    1.00 * height
  ]
  fill(250,250,200);
  if (debugView) {
    strokeWeight(1);
    stroke(255, 0, 0);
  
    for(let i=0; i<grid_points.length; i++) {
      line(0, grid_points[i], width, grid_points[i]);
    }
  }

  strokeWeight(2);
  stroke(0);
  for(let i=0; i<grid_points.length-1; i++) {
    let cur_grid_line = map(cur_frac, 0, 1, grid_points[i], grid_points[i+1])
    line(0, cur_grid_line, width, cur_grid_line);
    rect(150,100,50, cur_grid_line/4)
  }
}