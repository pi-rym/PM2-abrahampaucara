const clearButton = document.getElementById("clearButton");

const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");

const { postMovie } = require("./handler");

form.addEventListener("submit", function (event) {
  event.preventDefault();

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

    if (rate < 0.0 || rate > 10.0) {
      alert("Rate debe ser un número entre 0.0 y 10");
      return;
    }

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
