
TimerEl = document.querySelector("#currentDay"); // creates a variable for the current date and time displayed in the header //


// Create a loop of time to update the clock every second //
    var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    console.log(now);
    TimerEl.innerHTML = (now);

    




