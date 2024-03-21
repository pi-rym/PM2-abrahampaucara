const clearButton = document.getElementById("clearButton");

const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");

const { postMovie } = require("./handler");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  //seleccionar cada valor de los inputs con id
  const title = document.getElementById("title").value;
  const director = document.getElementById("director").value;
  const year = document.getElementById("year").value;
  const duration = document.getElementById("duration").value;
  const rate = document.getElementById("rate").value;
  const genre = document.getElementById("genre").value;
  const urlImage = document.getElementById("urlImage").value;
  
    if (
        title === "" ||
        year === "" ||
        director === "" ||
        urlImage === "" ||
        genre === "" ||
        rate === "" ||
        duration === ""
    ) {
        alert("Todos los campos son obligatorios");
        return;
    }

  //crear un objeto con los valores de los inputs
  const newMovie = {
    title,
    director,
    year,
    duration,
    rate,
    genre: genre.split(","),
    poster: urlImage,
  };
  postMovie(newMovie);
});

clearButton.addEventListener("click", function () {
  inputs.forEach((input) => {
    input.value = "";
  });
});
