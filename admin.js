function adminRoom(){
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

} 