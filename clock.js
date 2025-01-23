// Clock digits
const digitHourTens = document.getElementById("clock-hr-10");
const digitHourOnes = document.getElementById("clock-hr-1");
const digitMinTens = document.getElementById("clock-min-10");
const digitMinOnes = document.getElementById("clock-min-1");
const digitDots = document.getElementById("clock-dots");
var digitDotsEnabled = false;

// Setup clock interval
setInterval(function () {
  digitDotsEnabled = !digitDotsEnabled;
  digitDots.src = "/images/clock/" + String(digitDotsEnabled) + ".gif";

  const now = new Date();
  digitHourTens.src =
    "/images/clock/" + String(Math.floor(now.getHours() / 10)) + ".gif";
  digitHourOnes.src =
    "/images/clock/" + String(Math.floor(now.getHours() % 10)) + ".gif";
  digitMinTens.src =
    "/images/clock/" + String(Math.floor(now.getMinutes() / 10)) + ".gif";
  digitMinOnes.src =
    "/images/clock/" + String(Math.floor(now.getMinutes() % 10)) + ".gif";
}, 500);
