// LIST OF FUNCTIONS //


// VARIABLES //
    timerEl = document.querySelector("#currentDay"); // creates a variable for the current date and time displayed in the header //
    var now; // initializes variable used for current time and date //
    var rightnow = parseInt(moment().format("HH")); // creates a variable that returns the hour in military time //
    var localcalendar = [];

    /* These variables are used in updateCalendarArray() and loadPage() to assist in updating the additions and subtractions to each hourly events listed int he textareas */
    var el09e = document.querySelector("#event09");
    var el10e = document.querySelector("#event10");
    var el11e = document.querySelector("#event11");
    var el12e = document.querySelector("#event12");
    var el13e = document.querySelector("#event13");
    var el14e = document.querySelector("#event14");
    var el15e = document.querySelector("#event15");
    var el16e = document.querySelector("#event16");
    var el17e = document.querySelector("#event17");

    /* This variable creates an array with one object for each hour */
    var calendar = [
        {
            time: "",
            event: "",
            mtime: -1
        },

        {
            time: "",
            event: "",
            mtime: 0
        },

        {
            time: "",
            event: "",
            mtime: 2
        },
        
        {
            time: "",
            event: "",
            mtime: 12
        },
        
        {
            time: "",
            event: "",
            mtime: 13
        },
        
        {
            time: "",
            event: "",
            mtime: 14
        },
        
        {
            time: "",
            event: "",
            mtime: 15
        },
        
        {
            time: "",
            event: "",
            mtime: 16
        },
        
        {
            time: "",
            event: "",
            mtime: 17
        }

    ];


/* FUNCTIONS */
    // Date and time //
        // This code places the date and time in the header and updates it every second //
        (now = function() {
            timerEl.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
        })();

        setInterval(now, 1000);
    // end of Date and Time //

    /* Load Local Data Storage */
        /* Loads local data to stored array and copies to screen when page is loaded or refreshes */
        function loadPage(){
                el09e.textContent = calendar[0].event;
                el10e.textContent = calendar[1].event;
                el11e.textContent = calendar[2].event;
                el12e.textContent = calendar[3].event;
                el13e.textContent = calendar[4].event;
                el14e.textContent = calendar[5].event;
                el15e.textContent = calendar[6].event;
                el16e.textContent = calendar[7].event;
                el17e.textContent = calendar[8].event;
            
        }
    /* end of Load Local Data Storage */

    /* Prioritize Rows by Color */
        /* When the page reloads or is refreshed, checks for time of day and colors row appropriately */
        function comparetest() {
            console.log("comparetest()");
            console.log("rightnow: " + rightnow);
            console.log(calendar[0].mtime + "hour");
            if (calendar[0].mtime > rightnow){
                rnine.classList.add("past");
            } else {
                if (calendar[0].mtime == rightnow){
                    rnine.classList.add("present");
                } else {
                    rnine.classList.add("future");
                }
            }

            console.log("rightnow: " + rightnow);
            console.log(calendar[1].mtime + "hour");
            if (calendar[1].mtime > rightnow){
                rten.classList.add("past");
            } else {
                if (calendar[1].mtime == rightnow){
                    rten.classList.add("present");
                } else {
                    rten.classList.add("future");
                }
            }

            console.log("rightnow: " + rightnow);
            console.log(calendar[2].mtime + "hour");
            if (calendar[2].mtime > rightnow){
                releven.classList.add("past");
            } else {
                if (calendar[2].mtime == rightnow){
                    releven.classList.add("present");
                } else {
                    releven.classList.add("future");
                }
            }

            console.log("rightnow: " + rightnow);
            console.log(calendar[3].mtime + "hour");
            if (calendar[3].mtime > rightnow){
                rtwelve.classList.add("past");
            } else {
                if (calendar[3].mtime == rightnow){
                    rtwelve.classList.add("present");
                } else {
                    rtwelve.classList.add("future");
                }
            }

            console.log("rightnow: " + rightnow);
            console.log(calendar[4].mtime + "hour");
            if (calendar[4].mtime > rightnow){
                rone.classList.add("past");
            } else {
                if (calendar[4].mtime == rightnow){
                    rone.classList.add("present");
                } else {
                rone.classList.add("future");
                }
            }

            console.log("rightnow: " + rightnow);
            console.log(calendar[5].mtime + "hour");
            if (calendar[5].mtime > rightnow){
                rtwo.classList.add("past");
            } else {
                if (calendar[5].mtime == rightnow){
                    rtwo.classList.add("present");
                } else {
                rtwo.classList.add("future");
                }
            } 

            console.log("rightnow: " + rightnow);
            console.log(calendar[6].mtime + "hour");
            if (calendar[6].mtime > rightnow){
                rthree.classList.add("past");
            } else {
                if (calendar[6].mtime == rightnow){
                    rthree.classList.add("present");
                } else {
                rthree.classList.add("future");
                }
            }

            console.log("rightnow: " + rightnow);
            console.log(calendar[7].mtime + "hour");
            if (calendar[7].mtime > rightnow){
                rfour.classList.add("past");
            } else {
                if (calendar[7].mtime == rightnow){
                    rfour.classList.add("present");
                } else {
                rfour.classList.add("future");
                }
            }

            console.log("rightnow: " + rightnow);
            console.log(calendar[8].mtime + "hour");
            if (calendar[8].mtime > rightnow){
                rfive.classList.add("past");
            } else {
                if (calendar[8].mtime == rightnow){
                    rfive.classList.add("present");
                } else {
                rfive.classList.add("future");
                }
            }
        };
    /* end of Prioritize Rows by Color */


    /* Update Local Storage on Save */
        /* When a save button is selected, the calendar array is updated and then saved to local storage.  Executed when a save button is pressed */
        function updateCalendarArray() {
            console.log("updateCalendarArray");

            calendar[0].event = el09e.value;
            calendar[1].event = el10e.value;
            calendar[2].event = el11e.value;
            calendar[3].event = el12e.value;
            calendar[4].event = el13e.value;
            calendar[5].event = el14e.value;
            calendar[6].event = el15e.value;
            calendar[7].event = el16e.value;
            calendar[8].event = el17e.value;

            /* saving to local storage */
            localStorage.setItem("calendar", JSON.stringify(calendar));
        };
    /* end of updateCalendarArray() */

    /* This function prevents errors if the page loads with no localStorage */
        function checkforLocalData() {
            if (localStorage.length !== 0) {
                var localCalendar = JSON.parse(localStorage.getItem("calendar"));
                calendar = localCalendar;
            }
            comparetest(); /* runs function once so no delay in setting colors */
        }
    /* end of checkforLocalData() */



/* EXECUTION */

    /* This code is executed first in order to update any events stored locally and assign appropriate colors to the hours */

    checkforLocalData();

    loadPage();

    /* checks for color changes every minute */
    setInterval(comparetest, 60000);

    /* Listens for any save button to be clicked, then executes the updateCalendarArray function */
    document.querySelectorAll(".btn").forEach(item => {
        item.addEventListener('click', updateCalendarArray); {
        };
    });

      

// To Do //

/* check for responsiveness */
/* checkpoint time left aligned and icon right aligned.  Headers, too. */
/* make sure color code removes classes and rename variables */
/* need to make each button work independently or may overwrite when local saving */


// Last Revised 5/27/21 //
// Raemarie Oatman raemarie.oatman@gmail.com //
// Homework Week 5 - 05 Third-Party APIs: Work Day Scheduler //
