const form = document.querySelector("form");
const list = document.getElementById("list");
const remove = document.querySelectorAll(".remove");
console.log(remove);
// Storage part
console.log("p");
let mesDonnees = window.localStorage.maboite;

list.innerHTML += `<li class="remove">${mesDonnees} </li>`;

let valeur;
item.addEventListener("input", (e) => {
  valeur = e.target.value;
});
form.addEventListener("submit", (e) => {
  window.localStorage.maboite = valeur;
  e.preventDefault();
  list.innerHTML += `<li class = "remove">${valeur}</li> `;
});

list.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (e.target.className === "remove") {
    e.target.remove();
    console.log("bye");
  }
});
