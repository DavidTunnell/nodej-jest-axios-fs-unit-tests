# Jest Unit Tests for Node App Setup

This is a template to setup unit tests using the [Jest](https://jestjs.io/) framework for an API call (using [Axios](https://axios-http.com/) and [file system](https://nodejs.dev/learn/the-nodejs-fs-module) calls for [Node.js](https://nodejs.org/en/). Thus the most useful code is within ./API/test/ and ./FileSystem/test/ but the other files do provide context. To run this you will need to clone down the repo and then run `npm install` in each folder (Api, FileSystem) and then it can be run with `npm run test` (notice line 6-7 of package.json and the script below). Consider each folder (Api, FileSystem) a separate application for demo/template purposes. 

`"scripts": {
    "test": "jest"
}`

The above code allows `npm run test` to call jest.

The simple apps themselves can be run by running `node ./index.js` in their respective directories. 

# Screenshot

![screenshot](./Assets/screenshot.png)