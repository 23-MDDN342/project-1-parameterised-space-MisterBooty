ADAM LEACH

This code is a p5.js sketch that was aimed to produce a satisfying zoom meeting background that has a perfect loop. It is parameterised perfectly and can operate on any scale.

My original aim for this project, if you look at my sketch, was to create a static image of cubes, and then have a series of waves flowing through each of the rows, causing the cubes to ascend and then decsend in a flowing wave like motion. Looking back on this idea, i believe i should've been realistic with the fact that we could only create movement that would happen over 1 second, and it had to loop.

I got this idea to create the cube movement from various inspirations over the internet. However, I think one of my main influences was my childhood obseesion and in turn fascination of rubiks cubes. I begun collecting them around the age of ten and have since always had a large appreciation for them, and therefore the shape of a cube. I was also inspired by the mobile game 'Monument Valley', which is a highly satisying and puzzling work of art. It presents itself in an isometric view and features a heavy use of optical illusions. The last influence i believe i had when creating this desgin was a looping animation by the artist @beesandbombs, which involved a cube morphing and changing dramatically before retunring to its orignal form.

When i first touched my code, I first had the idea of creating each cube out of three seperate quads, and then have each face of the cube extend and retreat in their respective direction. Both of these approaches were quickly scrapped due to the complicatedness of multiple quads meaning at least 24 different variables, and the difficultying of making one quad extend, let alone three.

I soon settled by comprising that i could sneak around the shape of a cube by tucking the top of two rectangles side by side behind a sinlge quad, and the bottom of these rectanlges would be covered by the surrounding cubes.

Futher into my design, I created the pattern of the rectangles that need to go underneath by creating a checkerboard pattern using for loops to repeat the shape sideways and downwards. I then repeated this and offset it slightly to create another set that lined up diagnoally. through this method, i saved myself some time by using the backgrounds negative space to represent the other rectangle shade.

When it came to creating the quads, I had to to do quite a bit of research on https://p5js.org/reference/ in order to learn how to repeat the quads. In the end, through a lot of trial and error and frustration, I repeated the quads using translate(); with a for loop for sideways and downwards, inside of push(); and pop();. To then create the half offset rows of quads, the same method was repeated inside two push(); and push();'s with two translates;'s.

As mentioned before, my design has changed quite bit from when i first started this project. I made this decision due to my deadline and not wanting to overcomplicate my design or make it too fast, as both factors would cause a loss in the satisfying design.

To add the final touch to my parameterised wallpaer/background, I wanted to change something with my colours. At first I made a few maps that changed each shapes colour from its orignal colour to the background, and then back. This looked okay, but was a bit too flashy and lost its mood of satisfyingness. I settled on creating a map for the stroke of the shapes, making it strobe from white to black, and then backwards.

Overall, after adveturing through this journery of frustration, satisfaction and defeat, I am very very happy with how my design has turned out. While it is not what i was orignally after, I believe now that it is even better than what had i thought i wanted at the start.