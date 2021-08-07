// This file just allows the program to run and return data from the API, the unit testing is done directly on movieSearch.js

// require the movie search class file
const MovieSearch = require("./movieSearch");

//get an object  instance
const movie = new MovieSearch();

//print results to console
movie.search("Spider-Man")
    .then(res => console.log(res.data));