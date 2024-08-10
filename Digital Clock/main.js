let hour = document.getElementById("hours");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

setInterval(() => {
  let currentTime = new Date();

  hour.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minute.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  second.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
