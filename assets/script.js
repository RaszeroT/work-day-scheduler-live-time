// dayjs = set current date and time
const currentDate = dayjs();
const formattedDate = currentDate.format("dddd,MMMM,YYYY h:mm:ss a");

// currentHour variable to set hour for hourlyColorChange function
const currentHour = dayjs().format("H");

// dayjs = this function will attach live date and time to webpage
function liveTimeAndDate() {
  const dateEl = $("#date");
  const timeEl = $("#time");
  const currentDate = dayjs().format("dddd, MMMM D, YYYY");
  const currentTime = dayjs().format("h:mm:ss A");
  dateEl.text(currentDate);
  timeEl.text(currentTime);
} setInterval(liveTimeAndDate, 1000);

// jquery = this function will let you save input to description class of rows and allow you to save to local storage 
$(function textEntry() {
  $(".saveBtn").on("click", function () {
    const key = $(this).parent().attr("id");
    const value = $(this).siblings(".description").val();
    localStorage.setItem(key, value);
    console.log("stored");
  });
});

// jQuery = this function will retrieve local storage and remain in text area upon refresh
$(".time-block").each(function () {
  const key = $(this).attr("id");
  const value = localStorage.getItem(key);
  $(this).children(".description").val(value);
});

//jQuery = this function will make the timeBlocks change color according to the current time
$(function hourlyColorChange() {
  $(".time-block").each(function () {
    const hourBlock = parseInt(this.id);
    $(this).toggleClass("past", hourBlock < currentHour);
    $(this).toggleClass("present", hourBlock == currentHour);
    $(this).toggleClass("future", hourBlock > currentHour);
  });
});

// geeksforgeeks.org = I want the page to auto refresh so timeblock colors will be live - - need to follow up with TA to see if there is a better way to run this 
function autoRefresh() {
  window.location = window.location.href;
} setInterval('autoRefresh()', 15*60*1000);

console.log(autoRefresh);