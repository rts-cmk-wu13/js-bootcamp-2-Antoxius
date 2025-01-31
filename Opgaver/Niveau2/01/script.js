const buttons = document.querySelectorAll("button");
let selectedButton = null; // Variabel til at holde styr på den valgte knap

function toggleButton(button) {
  // Fjern 'click' fra alle knapper
  buttons.forEach(function (btn) {
    btn.classList.remove("click");
  });

  // Tilføj 'click' til den knap, der er valgt
  button.classList.add("click");
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Hvis den allerede valgte knap klikkes, fjern valget (tøm farven)
    if (selectedButton === button) {
      selectedButton = null;
      button.classList.remove("click");
    } else {
      // Ellers vælg den nye knap
      selectedButton = button;
      toggleButton(button);
    }
  });
});
