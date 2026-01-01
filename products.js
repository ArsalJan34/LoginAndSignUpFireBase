var productsDiv = document.getElementById("products");

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    GETProducts();
  }
});

function GETProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      productsDiv.innerHTML = "";
      data.forEach((item) => {
        productsDiv.innerHTML += `
          <div>
            <h3>${item.title}</h3>
            <img src="${item.image}" width="120" />
          </div>
        `;
      });
    })
    .catch((err) => console.log(err));
}

function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = "login.html";
  });
}
