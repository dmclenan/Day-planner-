// My ready function
$(document).ready(function () {
    // MY daily date on the page
    $("#currentDay").text(moment().format("MMM Do YY"));
    // I want the colors to change with the time
    var currentTime = parseInt(moment().format('HH'));
    // Compare current time to the time on the time block for each row
    $(".saveBtn").on("click", function () {
        // Storing values to varibles
        const value = $(this).siblings(".description").val()
        const rowTime = $(this).parent().attr("id")
        localStorage.setItem(rowTime, value)
    });
    //Loop through each row get hour and determine the past,present,future//
    function updatedHour() {
        var currentHour = moment().hours()
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id"))
            console.log(timeBlock, currentTime);
            if (timeBlock < currentTime) {
                $(this).addClass("past")
            }
            if (timeBlock === currentTime) {
                $(this).addClass("present")
            }
            if (timeBlock > currentTime) {
                $(this).addClass("future")
            }
        });
    }
    // Calling the updatedHour function to run
    updatedHour();
    // Saving descriptions to local storage 
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
})