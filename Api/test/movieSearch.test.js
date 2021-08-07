// require axios and the movieSearch class
const axios = require("axios");
const MovieSearch = require("../movieSearch");
// in order to test this method without actually hitting the API (and thus creating slow and fragile tests), we can use the jest.mock(...) function to automatically mock the axios module.
// https://jestjs.io/docs/mock-functions
jest.mock("axios");

// test the movieSearch class object
describe("MovieSearch", () => {
    // test buildUrl function
    describe("buildUrl", () => {
        it("should return an OMDB movie search URL using a movie name", () => {
            // initialize object
            const movie = new MovieSearch();
            const name = "Rocky";
            // build url with provided string
            const url = movie.buildUrl(name);
            // check that the result is as expected
            expect(url).toEqual(`https://www.omdbapi.com/?t=${name}&apikey=trilogy`);
        });
    });

    // test search API function
    describe("search", () => {
        it("should search the OMDB API for a given movie", () => {
            const movie = new MovieSearch();
            const name = "Rocky";
            // get a mock object from API
            axios.get.mockReturnValue(
                new Promise(function(resolve) {
                    resolve({ data: {} });
                })
            );
            //check that the mock results equal to the data object expected
            expect(movie.search(name)).resolves.toEqual({ data: {} });
            //check the last call was with the expected API URL
            expect(axios.get).lastCalledWith(movie.buildUrl(name));
            //check that it's been called on once
            expect(axios.get).toHaveBeenCalledTimes(1);
        });
    });
});