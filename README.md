# SFMOMA Artwork App

## Description

This interactive dashboard calls the SFMOMA API to retrieve and show various artwork and statistics from the museum's collection.

The dashboard contains a series of graphs that call and return data based from the artwork and artists of the SFMOMA collection.

![graphs](./public/graphs.png)

* The first graph showcases the amount of collected art that was created in the last century.  Photography, Painting & Sculpture, and Architecture & Design are all accumulated on the graph throughout time. Users can hover over each section to understand which collected art relates to each portion.

* The second graph showcases the artist gender breakdown from the collection.  Users can hover over each piece of the graph in order to see the specific breakdown.

* The third graph shows a percentage breakdown of the collected art based by country: United States vs Europe.

![artwork](./public/artwork.png)

Users can also search for artwork based on keyword. A list of results will dynamically appear along with relevant high-level information about each piece.  Users can browse throughout the results and they may click on each piece to forward them back to the SFMOMA website which contains additional information about each piece.

This dashboard was created with minimal and clean material design aspect in  mind. The site is also fully responsive for mobile viewing.

## How to run this app

You can run this application by the following set of instructions:

1. `git clone git@github.com:erintherad/sfmoma_artist_app.git`
2. `cd` into directory and `npm i` to install all dependencies
3. `npm start` to compile and run on a local server
4. Go to the browser

## Technologies

* React with Webpack for compiling
* Sass/Bootstrap for styling
* [Formidable Victory Library](https://formidable.com/open-source/victory/) for data visualization
* Node/Express back-end for routing
