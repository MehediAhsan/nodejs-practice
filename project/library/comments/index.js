// Dependencies
const fs = require('fs');

// Comments object - Module scaffolding
const comments = {};

// Get all the Comments and return them to the user
comments.allComments = function allComments() {
    // Read the text file containing the Comments
    const fileContents = fs.readFileSync(`${__dirname}/comments.txt`, 'utf8');

    // Turn the string into an array
    const arrayOfComments = fileContents.split(/\r?\n/);

    // Return the array
    return arrayOfComments;
};

// Export the library
module.exports = comments;