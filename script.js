"use strict";

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((Response) => Response.json())
    .then((item) => {
      console.log(item);
      products(item);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.escuelajs.co/api/v1/categories")
    .then((Response) => Response.json())
    .then((categories) => {
      console.log("categories: ", categories);
      renderCategories(categories);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.escuelajs.co/api/v1/users")
    .then((Response) => Response.json())
    .then((user) => {
      console.log(user);
      users(user)
    });
});

function products(items) {
  let data = document.getElementById("data");
  items.forEach((item) => {
    data.insertAdjacentHTML(
      "beforeend",
      `
      <div class='numOne'>
        <p id='name'>${item.title}</p>
        <p id='text' class='textRedaction'>${item.description}</p>
        <img id='photo' width='200px' height='200px' src='${item.images[0]}'>
       <a href='informationT.html' id='inform' class='inform'>Подробнее</a> 
        </div>
        `
    );
  });
}
function renderCategories(categories) {
  let data = document.getElementById("data_1");
  categories.forEach((categori) => {
    data.insertAdjacentHTML(
      "beforeend",
      `
      <div class='numSec'>
    <p>${categori.name}</p>
    <img width='200px' height='200px' src='${categori.image}'>
    </div>
    `
    );
  });
}

function users(user) {
  let data = document.getElementById("data_2");
  user.forEach((users) => {
    data.insertAdjacentHTML(
      "beforeend",
      `
    <div class='numThree'>
    <p>Email: ${users.email}</p>
    <p>Пароль: ${users.password}</p>
    <p>Имя пользователя: ${users.name}</p>
    <p>Роль пользователя: ${users.role}</p>
    <img src='${users.avatar}' width='200px' height='200px'>
    </div>
    `
    );
  });
}



// let globalInt

// function item(item){
//     globalInt = item;
//     for(let i = 0; i < item.lenght; i++){
//     allItem(item[i].category, item[i].i)
//     }
// }
// function allItem(products,item,price){
// let data_1 = {
//     'title': 'New Product',
//     'images': 'images',
//     'price': 'price'
// }

// }
// document.querySelector(`$[n.(item)]`).insertAdjacentHTML('beforeend',
// `<div onclick=''>
// <p>$item.title</p>
// <img src='$item.image'>
// <p>$item.price</p>
// </div>`)
// }
