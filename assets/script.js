// set current date and time
// dayjs
const currentDate = dayjs();
const formattedDate = currentDate.format("dddd,MMMM,YYYY h:mm:ss a");
const currentHour = dayjs().format("H");
console.log(formattedDate);
console.log('current hour: ' + currentHour)
// current time and date is being logged but not updated to webpage constantly?
// dayjs
function liveTimeAndDate() {
  // attach html elements
  const dateEl = $("#date");
  const timeEl = $("#time");
  // link to local timezone
  const currentDate = dayjs().format("dddd, MMMM D, YYYY");
  const currentTime = dayjs().format("h:mm:ss A");
  // create text to webpage
  dateEl.text(currentDate);
  timeEl.text(currentTime);
  // check
  console.log(liveTimeAndDate);
}
// set interval attaches live and date but incorrect time? GMT? -- corrected, needed to be linked again to local timezone
setInterval(liveTimeAndDate, 1000);

// jquery
$(function textEntry() {
  // TODO: Add a listener for click events on the save button.
  // jquery
  $(".saveBtn").on("click", function () {
    // create id
    const key = $(this).parent().attr("id");
    const value = $(this).siblings(".description").val();
    localStorage.setItem(key, value);
    console.log("stored");
  });

  // This code should use the id in the containing time-block as a key to save the user input in local storage.
});

// jQuery = this function will retrieve local storage and remain in text area upon refresh
$(".time-block").each(function () {
  const key = $(this).attr("id");
  const value = localStorage.getItem(key);
  $(this).children(".description").val(value);
  console.log("retrieved");
});

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
$(function hourlyColorChange() {
  $(".time-block").each(function () {
    const hourBlock = parseInt(this.id);
    $(this).toggleClass("past", hourBlock < currentHour);
    $(this).toggleClass("present", hourBlock == currentHour);
    $(this).toggleClass("future", hourBlock > currentHour);
  });
});

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
