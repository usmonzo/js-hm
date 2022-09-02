fetch("https://reqres.in/api/users?page=2")
  .then((data) => {
    // console.log(data.json());
    return data.json();
  })
  .then((userdata) => {
    let dataOne = "";
    userdata.data.map((values) => {
      dataOne += `<div class="account">
        <div class="name">${"Name:" + " " + values.first_name}</div>
        <div class="name2">${"Last name:" + " " + values.last_name}</div>
        <div class="email">${"email:" + " " + values.email}</div>
        <img src=${values.avatar} alt="#" class="image">
    </div>`;
    });
    document.getElementById("accounts__box").innerHTML = dataOne;
  })
  .catch((er) => {
    console.log(er);
  });

fetch("https://dummyjson.com/products")
  .then((product) => {
    // console.log(product.json());
    return product.json();
  })
  .then((shop) => {
    let productOne = "";
    shop.products.map((info) => {
      productOne += `<div class="product">
      <div class="info">
      <div class="product_name">${info.title}</div>
      <div class="product_desc">${"Description:" + " " + info.description}</div>
      <div class="product_price">${"Price:" + " " + info.price + "$"}</div>
      <div class="product_rating">${"Rating:" + " " + info.rating}</div>
      <div class="product_brand">${"Brand:" + " " + info.brand}</div>
      <div class="category">${"Category:" + " " + info.category}</div>
      </div>
        <div class="product_images">
            <img src="${info.images[0]}" alt="">
            <img src="${info.images[1]}" alt="">
            <img src="${info.images[2]}" alt="">
            <img src="${info.images[3]}" alt="">
        </div>
        </div>`;
    });
    document.getElementById("mini_online_shop").innerHTML = productOne;
  })
  .catch((err) => {
    console.log(err);
  });
