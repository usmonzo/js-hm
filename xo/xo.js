let box = document.querySelectorAll(".xo__btn");
let firstClick = true;

box.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.innerHTML == "") {
      elem.innerHTML = firstClick ? "X" : "O";
      firstClick = !firstClick;
    }
    winCombination(box);
    if (winCombination === true) {
      elem.innerHTML = "";
    }
    drawCombination(box);
    if (drawCombination === true) {
      elem.innerHTML = "";
    }
  });
});

function winCombination(box) {
  if (
    box[0].innerHTML == "X" &&
    box[1].innerHTML == "X" &&
    box[2].innerHTML == "X"
  ) {
    alert("X win");
    location.reload();
  }
  if (
    box[3].innerHTML == "X" &&
    box[4].innerHTML == "X" &&
    box[5].innerHTML == "X"
  ) {
    alert("X win");
    location.reload();
  }
  if (
    box[6].innerHTML == "X" &&
    box[7].innerHTML == "X" &&
    box[8].innerHTML == "X"
  ) {
    alert("X win");
    location.reload();
  }
  if (
    box[0].innerHTML == "X" &&
    box[3].innerHTML == "X" &&
    box[6].innerHTML == "X"
  ) {
    alert("X win");
    location.reload();
  }
  if (
    box[1].innerHTML == "X" &&
    box[4].innerHTML == "X" &&
    box[7].innerHTML == "X"
  ) {
    alert("X win");
    location.reload();
  }
  if (
    box[2].innerHTML == "X" &&
    box[5].innerHTML == "X" &&
    box[8].innerHTML == "X"
  ) {
    alert("X win");
    location.reload();
  }
  if (
    box[0].innerHTML == "X" &&
    box[4].innerHTML == "X" &&
    box[8].innerHTML == "X"
  ) {
    alert("X win");
    location.reload();
  }
  if (
    box[2].innerHTML == "X" &&
    box[4].innerHTML == "X" &&
    box[6].innerHTML == "X"
  ) {
    alert("X Win");
    location.reload();
  }

  //ldsjflkhdslhf;jdshjklfhldksfhjkl
  if (
    box[0].innerHTML == "O" &&
    box[1].innerHTML == "O" &&
    box[2].innerHTML == "O"
  ) {
    alert("O win");
    elem.forEach((elem) => {
      elem.innerHTML = "";
    });
  }
  if (
    box[3].innerHTML == "O" &&
    box[4].innerHTML == "O" &&
    box[5].innerHTML == "O"
  ) {
    alert("O win");
    elem.forEach((elem) => {
      elem.innerHTML = "";
    });
  }
  if (
    box[6].innerHTML == "O" &&
    box[7].innerHTML == "O" &&
    box[8].innerHTML == "O"
  ) {
    alert("O win");
    elem.forEach((elem) => {
      elem.innerHTML = "";
    });
  }
  if (
    box[0].innerHTML == "O" &&
    box[3].innerHTML == "O" &&
    box[6].innerHTML == "O"
  ) {
    alert("O win");
    elem.forEach((elem) => {
      elem.innerHTML = "";
    });
  }
  if (
    box[1].innerHTML == "O" &&
    box[4].innerHTML == "O" &&
    box[7].innerHTML == "O"
  ) {
    alert("O win");
    elem.forEach((elem) => {
      elem.innerHTML = "";
    });
  }
  if (
    box[2].innerHTML == "O" &&
    box[5].innerHTML == "O" &&
    box[8].innerHTML == "O"
  ) {
    alert("O win");
    elem.forEach((elem) => {
      elem.innerHTML = "";
    });
  }
  if (
    box[0].innerHTML == "O" &&
    box[4].innerHTML == "O" &&
    box[8].innerHTML == "O"
  ) {
    alert("O win");
    elem.forEach((elem) => {
      elem.innerHTML = "";
    });
  }
  if (
    box[2].innerHTML == "O" &&
    box[4].innerHTML == "O" &&
    box[6].innerHTML == "O"
  ) {
    alert("O Win");
    elem.forEach((elem) => {
      elem.innerHTML = "";
    });
  }

  //    DRAW MATCH
  //   if (
  //     (box[0].innerHTML == "X" || box[0].innerHTML == "O") &&
  //     (box[1].innerHTML == "X" || box[1].innerHTML == "O") &&
  //     (box[2].innerHTML == "X" || box[2].innerHTML == "O") &&
  //     (box[3].innerHTML == "X" || box[3].innerHTML == "O") &&
  //     (box[4].innerHTML == "X" || box[4].innerHTML == "O") &&
  //     (box[5].innerHTML == "X" || box[5].innerHTML == "O") &&
  //     (box[6].innerHTML == "X" || box[6].innerHTML == "O") &&
  //     (box[7].innerHTML == "X" || box[7].innerHTML == "O") &&
  //     (box[8].innerHTML == "X" || box[8].innerHTML == "O")
  //   ) {
  //     alert("Match Tie");
  //     // location.reload();
  //   }

  return true;
}
//    DRAW MATCH
function drawCombination() {
  if (
    (box[0].innerHTML == "X" || box[0].innerHTML == "O") &&
    (box[1].innerHTML == "X" || box[1].innerHTML == "O") &&
    (box[2].innerHTML == "X" || box[2].innerHTML == "O") &&
    (box[3].innerHTML == "X" || box[3].innerHTML == "O") &&
    (box[4].innerHTML == "X" || box[4].innerHTML == "O") &&
    (box[5].innerHTML == "X" || box[5].innerHTML == "O") &&
    (box[6].innerHTML == "X" || box[6].innerHTML == "O") &&
    (box[7].innerHTML == "X" || box[7].innerHTML == "O") &&
    (box[8].innerHTML == "X" || box[8].innerHTML == "O")
  ) {
    // elem.forEach((elem) => {
    //   elem.innerHTML = "";
    // });
    alert("Match Tie");

    // location.reload();
  }
}

// function drawCombination() {
//   if (
//     box[0].innerHTML != "" &&
//     box[1].innerHTML != "" &&
//     box[2].innerHTML != "" &&
//     box[3].innerHTML != "" &&
//     box[4].innerHTML != "" &&
//     box[5].innerHTML != "" &&
//     box[6].innerHTML != "" &&
//     box[7].innerHTML != "" &&
//     box[8].innerHTML != ""
//   ) {
//     alert("draw");
//   }
//   return true;
// }
