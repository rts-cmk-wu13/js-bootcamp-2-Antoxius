// Hent knappen ved hjælp af dens ID
const button = document.querySelector("#my-button");

// Tilføj en eventlistener til knappen
button.addEventListener("click", function () {
  // Skift mellem at tilføje og fjerne klassen "clicked"
  button.classList.toggle("clicked");
});
