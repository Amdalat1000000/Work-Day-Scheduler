//get the current date and time via Moment.js//
var now = moment();
var displayDate = now.format("dddd, MMMM Do YYYY");
var displayTime = now.format("h:mm:ss a");

//jQuery to set the text of the header element to the current date and time//
$("#currentDay").text(displayDate + " - " + displayTime);

//timeblocks for each hour of the workday (9am-5pm) using Bootstrap classes and jQuery//
var listOfTimes = [ "9am", "10am", "11am", "12pm"]

for (i=0; i< listOfTimes.length; i++) {
    var row = $("<div>").addClass("row time-block");
    var hour = $("<div>").addClass("col-1 hour").text(listOfTimes[i]);
    // if statement for checking past, present, future
    var text = $("<textarea>").addClass("col-10 future description").attr("id", listOfTimes[i]);
    var save = $("<button>").addClass("col-1 saveBtn").html("<i class='fas fa-save'></i>");
    // current hour is gotten from moment
    // check the time in relation to the hour to get the color of the text area
    // add event listener to save on click to get the info from text area and save to local storage
    // if tehre is information in local storage show it on load
    row.append(hour, text, save);
    $(".container").append(row);
}

