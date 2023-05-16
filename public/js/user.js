// function getFavorites(){ 
//   fetch("")
//   .then(response => response.json())
//   .then(data => {
//     let favoriteShowcase=document.querySelector(".favorite-showcase");
//     favoriteShowcase.innerHTML="";
//     data.message.forEach(item => {
//       let dogPhoto = document.createElement("img");
//       dogPhoto.setAttribute("src", item);
//       dogPhoto.setAttribute("alt", "Dog Image");
//       dogPhoto.setAttribute("class", "col-sm-6 col-md-4 col-lg-3 mb-3");
//       favoriteShowcase.appendChild(dogPhoto);
//     });
//   })
//   .catch(err => console.error(error));
// }
// getFavorites();