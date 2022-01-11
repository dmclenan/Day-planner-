// MY daily date on the page
$("#currentDay").text(moment().format("MMM Do YY"));
// I want the colors to change with the time
var currentTime = parseInt(moment().format('HH'));
// Compare current time to the time on the time block for each row
const rowTime = document.getElementById("9");
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
        if (timeBlock === currentTime) {
            $(this).addClass("present")
        }
    });
}
updatedHour();
// Saving descriptions to local storage 
var userInput = localStorage.getItem('savebtn9') || ''
document.getElementById("description9").value = userInput
// Creating a EventListener to save when clicked
document.getElementById("savebtn9").addEventListener("click", function () {
    var userInput = document.getElementById("description9").value
    localStorage.setItem('savebtn9', userInput);

    for (let i = 0; i < 9; i++) {
        var userInput = document.querySelector("savebtn9" + (i + 1))
        btn.addEventListener("click", function() {})
      }
});

