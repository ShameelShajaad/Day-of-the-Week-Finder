console.log("JS Loaded!");

let yearinput = document.getElementById("year");
let monthinput = document.getElementById("month");
let dateinput = document.getElementById("date");
let result = document.getElementById("result");
let findBtn = document.getElementById("find_btn");

function findDay() {
  let y = Number(yearinput.value);
  let m = Number(monthinput.value);
  let d = Number(dateinput.value);

  if (!y || !m || !d) {
    result.innerText = "Please fill all the Fields";
    return;
  }

  if (y < 1) {
    result.innerText = "Invalid Year";
    return;
  }

  if (m < 1 || m > 12) {
    result.innerText = "Month must be between 1 & 12";
    return;
  }

  if (d < 1) {
    result.innerText = "Date must be 1 or Higher";
    return;
  }

  let x = y % 4;

  if (m == 2) {
    if (x == 0 && d > 29) {
      result.innerText = "Invalid date for February (Leap year)";
      return;
    } else if (x != 0 && d > 28) {
      result.innerText = "Invalid date for February";
      return;
    }
  } else if (m == 4 || m == 6 || m == 9 || m == 11) {
    if (d > 30) {
      result.innerText = "That month has only 30 days";
      return;
    }
  } else if (d > 31) {
    result.innerText = "That month has only 31 days";
    return;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let y0 = y - Math.floor((14 - m) / 12);
  let z = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400);
  let m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
  let d0 = (d + z + Math.floor((31 * m0) / 12)) % 7;

  result.innerText = "It's a " + days[d0];
}
