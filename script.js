$(document).ready(function () {
    // MY daily date on the page
    $("#currentDay").text(moment().format("MMM Do YY"));
    // I want the colors to change with the time
    var currentTime = parseInt(moment().format('HH'));
    // Compare current time to the time on the time block for each row
    //const rowTime = document.getElementById("9");
    // const rowTime = document.getElementById("10");
    $(".saveBtn").on("click", function () {
        //var userInput = document.getElementById("description9").value
        //localStorage.setItem('savebtn', userInput);
 const value = $(this).siblings(".description").val()
    const rowTime = $(this).parent().attr("id")
    localStorage.setItem(value, rowTime)
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
    updatedHour();
    $("#hour9 .description").val(localStorage.getItem("hour9"));

    // Saving descriptions to local storage 
    //var userInput9 = localStorage.getItem('savebtn9') || ''
    //document.getElementById("description9").value = userInput9
    // Creating a EventListener to save when clicked

    // Saving descriptions to local storage 
    //var userInput10 = localStorage.getItem('savebtn') || ''
    //document.getElementById("description10").value = userInput10
    // Creating a EventListener to save when clicked
    //document.getElementById("savebtn").addEventListener("click", function () {
        //var userInput = document.getElementById("description10").value
        //localStorage.setItem('savebtn', userInput);

    //});

})