// LIST OF FUNCTIONS //
    /* Date and Time - This (now = function() places the date and time in the header and updates it every second */
    /* loadPage() - Loads local data to stored array and copies to screen when page is loaded or refreshes */
    /* comparetest() - When the page reloads or is refreshed, checks for time of day and colors row appropriately */
    /* checkforLocalData() - This function prevents errors if the page loads with no localStorage */


// VARIABLES //
    timerEl = document.querySelector("#currentDay"); /* creates a variable for the current date and time displayed in the header */
    var now; /* initializes variable used for current time and date */

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
            mtime: 9
        },

        {
            time: "",
            event: "",
            mtime: 10
        },

        {
            time: "",
            event: "",
            mtime: 11
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


// FUNCTIONS //
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
            var rightnow = parseInt(moment().format("HH")); // creates a variable that returns the hour in military time //
   
            if (calendar[0].mtime > rightnow){
                $(rnine).removeClass();
                $(rnine).addClass("row future");

            } else {
                if (calendar[0].mtime == rightnow){
                    $(rnine).removeClass();
                    $(rnine).addClass("row present");
                    
                } else {
                    $(rnine).removeClass();
                    $(rnine).addClass("row past");
                }
            }

            if (calendar[1].mtime > rightnow){
                $(rten).removeClass();
                $(rten).addClass("row future");

            } else {
                if (calendar[1].mtime == rightnow){
                    $(rten).removeClass();
                    $(rten).addClass("row present");
                } else {
                    $(rten).removeClass();
                    $(rten).addClass("row past");
                }
            }

            if (calendar[2].mtime > rightnow){
                $(releven).removeClass();
                $(releven).addClass("row future");

            } else {
                if (calendar[2].mtime == rightnow){
                    $(releven).removeClass();
                    $(releven).addClass("row present");

                } else {
                    $(releven).removeClass();
                    $(releven).addClass("row past");
                }
            }

            if (calendar[3].mtime > rightnow){
                $(rtwelve).removeClass();
                $(rtwelve).addClass("row future");

            } else {
                if (calendar[3].mtime == rightnow){
                    $(rtwelve).removeClass();
                    $(rtwelve).addClass("row present");
                    
                } else {
                    $(rtwelve).removeClass();
                    $(rtwelve).addClass("row past");
                }
            }

            if (calendar[4].mtime > rightnow){
                $(rone).removeClass();
                $(rone).addClass("row future");
            } else {
                if (calendar[4].mtime == rightnow){
                    $(rone).removeClass();
                    $(rone).addClass("row present");
                } else {
                    $(rone).removeClass();
                    $(rone).addClass("row past");
                }
            }

            if (calendar[5].mtime > rightnow){
                $(rtwo).removeClass();
                $(rtwo).addClass("row future");
            } else {
                if (calendar[5].mtime == rightnow){
                    $(rtwo).removeClass();
                    $(rtwo).addClass("row present");
                } else {
                    $(rtwo).removeClass();
                    $(rtwo).addClass("row past");
                }
            }

            if (calendar[6].mtime > rightnow){
                $(rthree).removeClass();
                $(rthree).addClass("row future");

            } else {
                if (calendar[6].mtime == rightnow){
                    $(rthree).removeClass();
                    $(rthree).addClass("row present");

                } else {
                    $(rthree).removeClass();
                    $(rthree).addClass("row past");
                }
            }

            if (calendar[7].mtime > rightnow){
                $(rfour).removeClass();
                $(rfour).addClass("row future");

            } else {
                if (calendar[7].mtime == rightnow){
                    $(rfour).removeClass();
                    $(rfour).addClass("row past");

                } else {
                    $(rfour).removeClass();
                    $(rfour).addClass("row past");
                }
            }

            if (calendar[8].mtime > rightnow){
                $(rfive).removeClass();
                $(rfive).addClass("row future");

            } else {
                if (calendar[8].mtime == rightnow){
                    $(rfive).removeClass();
                    $(rfive).addClass("row present");

                } else {
                    $(rfive).removeClass();
                    $(rfive).addClass("row past");
                }
            }
        }
    /* end of comparetest() */


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

    /* Date and Time */
        /* This code places the date and time in the header and updates it every second */
        (now = function() {
            timerEl.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
        })();

        setInterval(now, 1000);
    /* end of Date and Time */

    /* This code is executed immediately after getting the date and time in order to update any events stored locally and assign appropriate colors to the hours */
    checkforLocalData();

    loadPage();

    /* checks for color changes every minute */
    setInterval(comparetest, 60000);

    /* Listen for Save Button and Update Local Storage with the corresponding event  */
    $("button").click(function(){
        var btnclicked = $(this).attr('id');
        switch (btnclicked) {
            case "9": 
                calendar[0].event = el09e.value;
            break;

            case "10":
                calendar[1].event = el10e.value;
            break;

            case "11":
                calendar[2].event = el11e.value;
            break;
            
            case "12":
                calendar[3].event = el12e.value;
            break;
            
            case "13":
                calendar[4].event = el13e.value;
            break;

            case "14":
                calendar[5].event = el14e.value;
            break;

            case "15":
                calendar[6].event = el15e.value;
            break;

            case "16":
                calendar[7].event = el16e.value;
            break;

            case "17":
                calendar[8].event = el17e.value;
            break;
        }

        /* saving to local storage */
        localStorage.setItem("calendar", JSON.stringify(calendar));

    });
    /* end of listen for save button and update local storage */


// Last Revised 5/29/21 //
// Raemarie Oatman raemarie.oatman@gmail.com //
// Homework Week 5 - 05 Third-Party APIs: Work Day Scheduler //