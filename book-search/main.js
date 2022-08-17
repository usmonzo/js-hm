window.onload = () => {
  let search = document.querySelector("#search");
  search.oninput = function () {
    let value = this.value.trim();
    let bookList = document.querySelectorAll(".ul li");

    if (value) {
      bookList.forEach((elem) => {
        if (elem.innerText.search(value) == -1) {
          elem.classList.add("hide");
        }
      });
    } else {
      bookList.forEach((elem) => {
        elem.classList.remove("hide");
      });
    }

    console.log(this.value);
  };
};
