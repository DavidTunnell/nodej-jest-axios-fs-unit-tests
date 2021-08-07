// require axios
const axios = require("axios");

// creat constructor method with several functions added 
function MovieSearch() {}

// get API URL with search term
MovieSearch.prototype.buildUrl = function(movie) {
    return `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`;
};

// get API search results via axios
MovieSearch.prototype.search = function(movie) {
    return axios.get(this.buildUrl(movie));
};

// make this requireable
module.exports = MovieSearch;