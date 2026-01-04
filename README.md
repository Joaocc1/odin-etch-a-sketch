# odin-etch-a-sketch

This is my fourth project of the Foundations path from [The Odin Project](https://www.theodinproject.com/).

It expands on the javascript knowledge and although it took me less time than the previous one I feel like this one was more complex but overall more fun as well figuring out how to make it.

I followed the assignment 4 parts. 

1. The first one was just to create the github repo. 
2. The second one involved setting the project, creating the initial html boilerplate and using javascript to generate all the `<div>` elements that act as pixels. Although easy to recreate I didn't initially understood that each `<div>` height and width would be determined by the number of them, and that the sketchpad or board would always be the same size, so initially in this step I defined a certain height and width for each `<div>`.
3. Initially I set up the "hover" effect by adding a class to the `<div>`, once that `<div>` was hovered, that would add a background color
4. It was on this step that I realized my mistake in the second step and proceeded to correct it which took several tries to get it right. In my initial tries the height and width would not be the same even though it fill the whole area or it would be the same but would also have gaps between some of the `<div>` elements. Eventually I settled on using percentages to define the size of the `<div>` elements which worked perfectly with whatever number was used to define the resolution (example 16x16). At this stage I also changed the way the "hover" effect worked by no longer adding a class but instead change it's opacity directly.

For the extra stuff I decided to include a button that would toggle if the color randomizes or not so that there's the option for one or the other.

[Live here](https://joaocc1.github.io/odin-etch-a-sketch/)
