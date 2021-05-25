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

/* allow user to add/edit events directly in the cell */
/* add an event listener for the delete buttons */
/* change table colors depending upon the time of day */
/* store data time:event to local storage */
/* change margin between cells */
/* check for responsiveness */






        // Last Revised 5/24/21 //
        // Raemarie Oatman raemarie.oatman@gmail.com //
        // Homework Week 5 - 05 Third-Party APIs: Work Day Scheduler //


