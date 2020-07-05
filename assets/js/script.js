// Variable list
var text = "";

// Get the current day using moment and display on scheduler
var today = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(today);

//Get the current hour
var currentHour = moment().hour();
    
// Get current time and compare to time slots to add background color
function timeBlock() {
    $(".time-block").each(function () {
        var block = parseInt($(this).attr("id").split("hour")[1]);
        if (block < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).children(".appt").attr("disabled", "disabled");
        }
        else {        
            if (block === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).children(".appt").removeAttr("disabled");
            }  
            else {
                if (block > currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
                $(this).children(".appt").removeAttr("disabled");
                }
            }
        }
    }) 
}

// Get saved appointments from local strorage
function getAppointments() {
    // initialize appointments
    $("#hour09 .appt").val("");
    $("#hour10 .appt").val("");
    $("#hour11 .appt").val("");
    $("#hour12 .appt").val("");
    $("#hour13 .appt").val("");
    $("#hour14 .appt").val("");
    $("#hour15 .appt").val("");
    $("#hour16 .appt").val("");
    $("#hour17 .appt").val("");
    $("#hour10 .appt").val("");
        
    // load appointments
    $("#hour09 .appt").val(localStorage.getItem("hour09"));
    $("#hour10 .appt").val(localStorage.getItem("hour10"));
    $("#hour11 .appt").val(localStorage.getItem("hour11"));
    $("#hour12 .appt").val(localStorage.getItem("hour12"));
    $("#hour13 .appt").val(localStorage.getItem("hour13"));
    $("#hour14 .appt").val(localStorage.getItem("hour14"));
    $("#hour15 .appt").val(localStorage.getItem("hour15"));
    $("#hour16 .appt").val(localStorage.getItem("hour16"));
    $("#hour17 .appt").val(localStorage.getItem("hour17"));
}

// On save button save appointment
$(".saveBtn").on("click", function() {
    event.preventDefault();
    var text = $(this).siblings(".appt").val();
    var timeBlock = $(this).parent().attr("id");
    localStorage.setItem(timeBlock, text);
    getAppointments();
});

getAppointments();
timeBlock();