//TODO: Assign var to row with time, text area and save button with JQ

//TODO: Show the time on top of the claneder, using moment.js grab the time, and set the text of the P tag with the id of currentDay to show on top of calendar

//TODO: creat an array to hold the hours that is shown on the palnner ["9AM", "10Am"...] ect

//TODO: use a for loop

//TODO: loop over my array of hours and create a div for row, create div for hours, textarea, and a button

//TODO: give the elements some content

//TODO: How can i compare the hours of my rows, to the current time? (use moment.js get the current time and compare to the time that is being assigned to the row)
//TODO: give the elements the classes that need e.g.  using an IF statement we can check using moment.js to see if the hour that we are looping over is current or past hour and assign color to distinguish differet time
//TODO: add click event to save button to store info in local storage

//TODO: grab the value of the text are and save it to a var and store information to local. save button need to be related to the time and textarea 

//TODO: using localStorage.setItem save the text to the local storage

//TODO: save the data from local storage to the textarea 



//feeding time and date information from moment.js and place date info to html
var date
var hour
$.ajax({
  url: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
  method: "GET"
}).then(function (logDate) {
  date = moment().format('MMMM Do YYYY, h:mm:ss a');
  hour = moment().format('H');
  console.log(hour);
  colorTimeSlot($(".row"), hour)
  $("#currentDay").text(date)
})

// creat time table for the table layout with each row by hour using JQ to assign each html elements

var timeArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"]
var t;
for (t = 0; t < timeArr.length; t++) {
  console.log(timeArr[t]);
  
  var row = $('<section class="row time-block"></section>');
  var timeSlot = $('<time class="col-md-1 hour"></time>');
  var textArea = $('<textarea class="col-md-10"></textarea>');
  var button = $('<buton class="col-md-1 saveBtn">SAVE</buton>')
  








  var textAreaName = "#textarea"+timeArr[t]

  var buttonObj = {


    textAreaNameinternal : "hola",
    foo(){alert(this)
    localStorage.setItem(this.textAreaNameinternal, $(this.textAreaNameinternal).text)
    
  }
  
}

buttonObj.foo()



//buttonObj.textAreaNameinternal = textAreaName;
button.click(buttonObj.foo);














  // $("button").hover(function(){
  //   $(this).css("saveBtn i:hover")
  //   });

  row.append(timeSlot);
  row.append(textArea);
  row.append(button);

  timeSlot.text(timeArr[t]);

  console.log($(".container").append(row));
}

var saveButton = 

//setting up an var for fixedTime minus 9 to corresponding to array index no. of calendar time slot
//for each if statement the index [i] will be compared to the fixedTime to determine if its past, present or future.
function colorTimeSlot(timeArr, date){
  var fixedTime = parseInt(date)-9;
for (var i = 0; i<timeArr.length; i++){
  timeArr[i].children[1].classList.remove("past");
  timeArr[i].children[1].classList.remove("future");
  timeArr[i].children[1].classList.remove("present");
  
  //remove all pre-assigned css class for color setting "past","future","present"
  if(i==fixedTime){
  timeArr[i].children[1].classList.add("present");
  }
  if(i<fixedTime){
  timeArr[i].children[1].classList.add("past");
  }
  if(i>fixedTime){
    timeArr[i].children[1].classList.add("future");
    }
}
}


// // To be used code
// localStorage.setItem("test", "My first note")
// licalStorage.setItem("test1", "My second note")

// var txFromStorage = localStorage.getItem("test")
// $(".first").text(txFromStorage)

// console.log(moment().format("h A")




