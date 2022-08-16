let btnMinus = document.getElementById("minus");
let btnPlus = document.getElementById("plus");
let colorBox = document.getElementById("colorBox");
let numberBox = document.getElementById("numberBox");

// functioning of the btns
let numbers = 1;
btnPlus.addEventListener("click", function addNumber() {
  numbers++;
  if (numbers == 10) {
    numbers = 1;
  }
  numberBox.innerHTML = numbers;
  colorBoxChange();
  console.log(numbers);
});

btnMinus.addEventListener("click", function minusNumber() {
  numbers--;
  if (numbers == 0) {
    numbers = 9;
  }
  numberBox.innerHTML = numbers;
  colorBoxChange();
  console.log(numbers);
});

function colorBoxChange() {
  if (numbers == 1 || numbers == 2 || numbers == 3) {
    colorBox.style.background = "rgb(255, 0, 0)";
    colorBox.style.color = "rgb(0, 0, 0)";
  } else if (numbers == 4 || numbers == 5 || numbers == 6) {
    colorBox.style.background = "rgb(255, 255, 0)";
    colorBox.style.color = "rgb(255, 0, 0)";
  } else {
    colorBox.style.background = "rgb(0, 255, 0)";
    colorBox.style.color = "rgb(0, 0, 255)";
  }
}
