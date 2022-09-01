fetch("https://reqres.in/api/users?page=2")
  .then((data) => {
    //   console.log(data);
    return data.json();
  })
  .then((userdata) => {
    let dataOne = "";
    userdata.data.map((values) => {
      dataOne += `<div class="account">
        <div class="name">${values.first_name}</div>
        <div class="name2">${values.last_name}</div>
        <div class="email">${values.email}</div>
        <img src=${values.avatar} alt="#" class="image">
    </div>`;
    });
    document.getElementById("accounts__box").innerHTML = dataOne;
  })
  .catch((er) => {
    console.log(er);
  });
