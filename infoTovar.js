fetch(`https://api.escuelajs.co/api/v1/products/`)
.then(response => response.json())
.then(item => {
    console.log(item);
    let inform = document.getElementById('opisTovar');
    inform.insertAdjacentHTML('beforeend', `
        <a href="index.html">Вернуться обратно</a>
        <p>${item.title}</p>
        <p>${item.description}</p>
        <p>${item.price}</p>
        <img src="${item.images}">
    `);
});