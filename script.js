//get the current date and time via Moment.js//
var now = moment();
var displayDate = now.format("dddd, MMMM Do YYYY");
var displayTime = now.format("h:mm:ss a");
var presentHour = moment().hours();
//jQuery to set the text of the header element to the current date and time//
// console.log($('#9Oclock').text());

$("#currentDay").text(displayDate + " - " + displayTime);
var schedulerInput = $("#9am").val();

$("#saveBtn1").on( "click", function() {
schedulerInput = $("#9am").val();
localStorage.setItem("9am", schedulerInput);
   console.log(localStorage.getItem("9am") );
  });
  $("#9am").val(localStorage.getItem("9am"));

$("#saveBtn2").on( "click", function() {
 schedulerInput = $("#10am").val();
 localStorage.setItem("10am", schedulerInput);
    console.log(localStorage.getItem("10am") );
   });
   $("#10am").val(localStorage.getItem("10am"));
      
$("#saveBtn3").on( "click", function() {
 schedulerInput = $("#11am").val();
 localStorage.setItem("11am", schedulerInput);
    console.log(localStorage.getItem("11am") );
   });
   $("#11am").val(localStorage.getItem("11am"));

$("#saveBtn4").on( "click", function() {
 schedulerInput = $("#12pm").val();
 localStorage.setItem("12pm", schedulerInput);
    console.log(localStorage.getItem("12pm") );
   });
   $("#12pm").val(localStorage.getItem("12pm"));

$("#saveBtn5").on( "click", function() {
 schedulerInput = $("#1pm").val();
 localStorage.setItem("1pm", schedulerInput);
    console.log(localStorage.getItem("1pm") );
   });
   $("#1pm").val(localStorage.getItem("1pm"));

$("#saveBtn6").on( "click", function() {
 schedulerInput = $("#2pm").val();
 localStorage.setItem("2pm", schedulerInput);
    console.log(localStorage.getItem("2m") );
   });
   $("#2pm").val(localStorage.getItem("2pm"));

$("#saveBtn7").on( "click", function() {
 schedulerInput = $("#3pm").val();
 localStorage.setItem("3pm", schedulerInput);
    console.log(localStorage.getItem("3pm") );
   });
   $("#3pm").val(localStorage.getItem("3pm"));

$("#saveBtn8").on( "click", function() {
 schedulerInput = $("#4pm").val();
 localStorage.setItem("4pm", schedulerInput);
    console.log(localStorage.getItem("4pm") );
   });
   $("#4pm").val(localStorage.getItem("4pm"));

$("#saveBtn9").on( "click", function() {
 schedulerInput = $("#5pm").val();
 localStorage.setItem("5pm", schedulerInput);
    console.log(localStorage.getItem("5pm") );
   });
   $("#5pm").val(localStorage.getItem("5pm"));

//Change colour based on time each time needs an if statement of greater, lss than or equal to  there's different add classes
function SetRowColor1() {
    console.log(displayTime);
    var timeRows = $("#9Oclock");
    timeRows.each(function() {
      var timeRowHour = $(this).data("hour");
      console.log(timeRowHour);

      if (timeRowHour === presentHour) {
        $(this).addClass("present");
      } else if (timeRowHour < presentHour) {
        $(this).addClass("past");
      } else {
        $(this).addClass("future");
      }
    });
    
    SetRowColor();
    
}

//timeblocks for each hour of the workday (9am-5pm) using Bootstrap classes and jQuery//
// var listOfTimes = [ "9 am", "10 am", "11 am", "12 pm", "1 pm"]

// for (i=0; i< listOfTimes.length; i++) {
//     var row = $("<div>").addClass("row time-block");
//     var hour = $("<div>").addClass("col-1 hour").text(listOfTimes[i]);
    // if statement for checking past, present, future
    // current hour is taken from moment
    // the if stament also checks the time in relation to the hour to get the color of the text area
    // var currentTime = moment().format("H");
    // if (currentTime<listOfTimes[i].split(' ')[0]) {
    //     var text = $("<textarea>").addClass("col-10 future description").attr("id", listOfTimes[i]);
    // } else if (currentTime>listOfTimes[i].split(' ')[0]) {
    //     var text = $("<textarea>").addClass("col-10 past description").attr("id", listOfTimes[i]);
    // } else {
    //     var text = $("<textarea>").addClass("col-10 present description").attr("id", listOfTimes[i]);
    // }
    
    // add delegated event handler to save on click to get the info from text area and save to local storage
    // var schedulerInput = $("<textarea>").text();
    // var save = $("<button>").addClass("col-1 saveBtn").html("<i class='fas fa-save'></i>");
    // $( "<button>" ).on( "click", function() {
    //     localStorage.setItem("SchedulerEntry", schedulerInput);
    //     console.log( $( this ).text() );
    //   }); 
      //look at key scheduler entity in local stoarge

    // if there is information in local storage show it on load
    // var localStorageInput = localStorage.getItem("SchedulerEntry", schedulerInput); 
    //console log the localStorageInput varaiable
    // console.log(localStorageInput);
    //display the getItem to the user
    // $("<textarea>").val(localStorageInput);
    // row.append(hour, text, save);
    // $(".container").append(row);
    //item is saved so that when the page is refreshed the data entry (localStorageInput) still shows on the screen
    //stp 1 when save is clicked after entering a task , you can see the key shceduler entry in the application's local storage
    //stp 2 when data iis taken from local storage console.log the data
    //stp 3 displaying the data from local storage to the user1
// }
// $("#9 am").val(localStorageInput);

