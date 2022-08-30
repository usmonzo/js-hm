function trafficLight() {
  let red = document.getElementById("red");
  let yellow = document.getElementById("yellow");
  let green = document.getElementById("green");

  setTimeout(function () {
    red.style.backgroundColor = "red";
  }, 1000);
  setTimeout(function () {
    yellow.style.backgroundColor = "yellow";
  }, 3000);
  setTimeout(function () {
    red.style.backgroundColor = "rgba(0, 0, 0, 0.334)";
    yellow.style.backgroundColor = "rgba(0, 0, 0, 0.334)";
    green.style.backgroundColor = "green";
  }, 5000);
  turOff();
  function turOff() {
    red.style.backgroundColor = "rgba(0, 0, 0, 0.334)";
    yellow.style.backgroundColor = "rgba(0, 0, 0, 0.334)";
    green.style.backgroundColor = "rgba(0, 0, 0, 0.334)";
  }
}

let timer = setInterval(() => {
  trafficLight();
}, 6500);
trafficLight();

// Second traffic light with counter...
function trafficLightt() {
  let red = document.getElementById("redd");
  let yellow = document.getElementById("yelloww");
  let green = document.getElementById("greenn");
  // let redNumber = document.getElementsByClassName("red-number");
  // let yellowNumber = document.getElementsById("yellow-number");
  // let greenNumber = document.getElementsById("green-number");
  // function counter() {
  //   for (let i = 0; i < redNumber; i--) {
  //     if (i=) {

  //     }
  //   }
  // }
  green.style.opacity = 1;

  setTimeout(function () {
    red.style.backgroundColor = "red";
  }, 1000);
  setTimeout(function () {
    yellow.style.backgroundColor = "yellow";
  }, 3000);
  setTimeout(function () {
    red.style.backgroundColor = "rgba(0, 0, 0, 0.334)";
    yellow.style.backgroundColor = "rgba(0, 0, 0, 0.334)";
    green.style.backgroundColor = "green";
  }, 5000);
  turOff();
  function turOff() {
    red.style.backgroundColor = "rgba(0, 0, 0, 0.334)";
    yellow.style.backgroundColor = "rgba(0, 0, 0, 0.334)";
    green.style.backgroundColor = "rgba(0, 0, 0, 0.334)";
  }
}
let timerr = setInterval(() => {
  trafficLightt();
}, 6500);
trafficLightt();
