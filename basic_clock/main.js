let clockNumbers = document.getElementsByClassName("clock__body");

function showingTime() {
  let newDate = new Date();
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let date = document.getElementById("day");
  let month = document.getElementById("month");
  let year = document.getElementById("year");

  hours.innerHTML = newDate.getHours();
  minutes.innerHTML = newDate.getMinutes();
  seconds.innerHTML = newDate.getSeconds();
  date.innerHTML = newDate.getDate();
  month.innerHTML = newDate.getMonth() + 1;
  year.innerHTML = newDate.getFullYear();
}

setInterval(showingTime, 100);

function clockData() {
  let amPm = document.getElementById("sessions");

  if (hours > 2 && hours < 12) {
    amPm.innerHTML = "PM";
  } else {
    amPm.innerHTML = "AM";
  }

  if (hours < 12) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
}

setInterval(clockData, 100);
