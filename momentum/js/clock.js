const clock = document.querySelector("h2#clock");
const date = document.body.querySelector("#date");

function getDate() {
  const date_ = new Date();
  const dayDate = String(date_.getDate()).padStart(2, "0");
  // const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date_.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = days[date_.getDay()];
  const month = months[date_.getMonth()];

  // console.log(year);
  // console.log(month);
  // console.log(dayDate);
  // console.log(day);

  date.innerText = `${year}  ${month}  ${dayDate} (${day})`;
}

function getClock() {
  const date_ = new Date();
  const hours = String(date_.getHours()).padStart(2, "0");
  const minutes = String(date_.getMinutes()).padStart(2, "0");
  const seconds = String(date_.getSeconds()).padStart(2, "0");

  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getDate();
getClock();
setInterval(getClock, 1000);
