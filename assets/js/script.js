// Get the cuurent day
var today = moment().format("dddd, MMMM Do YYYY");
    console.log(today);
    $("#currentDay").text(today);

    //Get the current hour
var currentHour = moment().hour();
    console.log(currentHour)

// Get current time and compare to time slots
function timeBlock() {
    $(".time-block").each(function () {
        var block = parseInt($(this).attr("id").split("hour")[1]);
        console.log(block, currentHour);
        if (block < currentHour) {
            console.log(this);
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else {        
            if (block === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            } 
            else {
                if (block > currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
                }
            }
        }
    }) 
}

// Get saved appointments from local strorage
function getAppointments() {
    // initialize appointments
    $("#hour09 .descripton").val(" ");
    $("#hour10 .descripton").val(" ");
    $("#hour11 .descripton").val(" ");
    $("#hour12 .descripton").val(" ");
    $("#hour13 .descripton").val(" ");
    $("#hour14 .descripton").val(" ");
    $("#hour15 .descripton").val(" ");
    $("#hour16 .descripton").val(" ");
    $("#hour17 .descripton").val(" ");    
    
    // load appointments
    $("#hour09 .descripton").val(localStorage.getItem("hour09"));
    $("#hour10 .descripton").val(localStorage.getItem("hour10"));
    $("#hour11 .descripton").val(localStorage.getItem("hour11"));
    $("#hour12 .descripton").val(localStorage.getItem("hour12"));
    $("#hour13 .descripton").val(localStorage.getItem("hour13"));
    $("#hour14 .descripton").val(localStorage.getItem("hour14"));
    $("#hour15 .descripton").val(localStorage.getItem("hour15"));
    $("#hour16 .descripton").val(localStorage.getItem("hour16"));
    $("#hour17 .descripton").val(localStorage.getItem("hour17"));
}

// On save button save appointment
$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");
    console.log(text, timeBlock);
    localStorage.setItem(timeBlock, text);
    getAppointments();
});

getAppointments();
timeBlock();
