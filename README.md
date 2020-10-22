# The-Other-Side-of-Earth
Personal project built out of curiosity. Allows user to select a location on the map and have the antipode (other side of earth) displayed. Just click on the left map, or use the search bar to enter a location.
Live demo can be found on github.io [here](https://sasountorossian.github.io/The-Other-Side-of-Earth/)

![TOSE Demonstration](Earth.gif)

Used the google maps api to generate marker on map 1, then calculate antipode using marker position. Antipode is calculated by inverting the latitude (e.g. 15deg -> -15deg), and adding 180deg to longitude (e.g. 25deg -> 205deg).
Search box was implemented by following tutorial, though excessive code was trimmed off.

Had to add a restriction on both maps to prevent user from scrolling into gray area on maps.

Initially thought of more complex design with animated background and circular maps, but it would have been too cluttered. Settled on simple yet majestic image of earth in the background which matches the theme nicely.

Quick and dirty project to get a bit more familiarity with the Google Maps API.
