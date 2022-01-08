// I want to have a daily date on the page
$("#currentDay").text(moment().format("MMM Do YY"));
// I want the colors to change with the time
var currentTime = parseInt(moment().format('HH'));
console.log(currentTime);
// I want to save to local storage
// Alert message: "I just saved to local storage"

// Compare current time to the time on the time block for each row
const rowTime = document.getElementById("9");
// Loop through each row get hour and determine if its 
//in the past present future

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


        //console.log( index + ": " + $( this ).text() );


    });
}
updatedHour();

/* var obj = {
    arrayKey: [],
    numKey: 5,
    stringKey: "Hi",
    objKey: {
        nestedKey: "Hi"
    },
    funcKey: function Blah(){
        console.log("Blah");
    }
}

console.log(obj.funcKey); */
