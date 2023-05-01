/*
 * Name: Application that print random Comments per second interval.
*/

// Dependencies setup
const calculateLibrary = require('./library/calculate');
const commentsLibrary = require('./library/comments');

// App object (Module scaffolding)
const app = {};

// Configuration setup
app.config = {
    timeBetweenComments: 1000,
};

// Function (prints a random quote)

app.printAQuote = function printAQuote(a) {
    // Get all the Comments
    const allComments = commentsLibrary.allComments();

    // Get the length of the Comments
    const numberOfComments = allComments.length;

    // Pick a random number between 1 and the number of Comments
    const randomNumber = calculateLibrary.getRandomNumber(1, numberOfComments);

    // Get the quote at that position in the array (minus one)
    const selectedQuote = allComments[randomNumber - 1];

    // Print the quote to the console
    console.log(a,randomNumber,selectedQuote);
};

// Function that loops indefinitely, calling the printAQuote function as it goes

app.indefiniteLoop = function indefiniteLoop() {
    // Create the interval, using the config variable defined above
    setInterval(app.printAQuote, app.config.timeBetweenComments,'comment');
};

// call the loop function
app.indefiniteLoop();