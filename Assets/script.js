// LIST OF FUNCTIONS //


// VARIABLES //
timerEl = document.querySelector("#currentDay"); // creates a variable for the current date and time displayed in the header //
var now; // initializes variable used for current time and date //


// DATE AND TIME //
    // This code places the date and time in the header and updates it every second //
    (now = function() {

        timerEl.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');

    })();

    setInterval(now, 1000);
// end of Date and Time //







