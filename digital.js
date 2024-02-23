"use strict";

const displayYear = document.querySelector(".displayYear");
const blinks = document.querySelectorAll(".blinks");
let second, mins, hours;

const checkZeroInTime = function (num) {
  return num <= 9 ? num.padStart(2, "0") : num;
};

const setDefault = function () {
  const date = new Date();
  const getHour = date.toLocaleString("Default", { hour: "numeric" });
  const hourWithoutAmPm = getHour.replace(/AM|PM/g, "").trim();
  const setMins = date.toLocaleString("Default", { minute: "numeric" });
  const setSecond = date.toLocaleString("Default", { second: "2-digit" });

  document.querySelector(".second").textContent = checkZeroInTime(setSecond);
  mins = document.querySelector(".mins").textContent = checkZeroInTime(setMins);
  hours = document.querySelector(".hour").textContent =
    checkZeroInTime(hourWithoutAmPm);
  return date;
};
const getDateFunction = setDefault();

const interval = setInterval(function () {
  setDefault();
}, 1000);

const getDate = getDateFunction.toLocaleString("default", { weekday: "short" });

switch (getDate) {
  case "Mon":
    document.querySelector(".mon").classList.add("activeDay");
    break;
  case "Tue":
    document.querySelector(".tue").classList.add("activeDay");
    break;
  case "Wed":
    document.querySelector(".wed").classList.add("activeDay");
    break;
  case "Thu":
    document.querySelector(".thur").classList.add("activeDay");
    break;
  case "Fri":
    document.querySelector(".fri").classList.add("activeDay");
    break;
  case "Sat":
    document.querySelector(".sat").classList.add("activeDay");
    break;
  case "Sun":
    document.querySelector(".sun").classList.add("activeDay");
    break;
}

// Display hour to get the either AM or PM
const amPmCheck = getDateFunction.toLocaleString("default", {
  hour: "numeric",
});
const showOnlyAmPm = amPmCheck.replace(/^\d+ /, "");

showOnlyAmPm &&
  document.getElementById(`${showOnlyAmPm}`).classList.add("activeDay");

const yearDayMonth = getDateFunction.toLocaleString("default", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
displayYear.textContent = yearDayMonth;

for (let i = 0; i < blinks.length; i++) {
  blinks[i].classList.add("blinkDots");
}
