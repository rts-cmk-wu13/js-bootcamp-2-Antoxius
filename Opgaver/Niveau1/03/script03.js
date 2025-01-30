function sjulElementViaCssSelector(cssSelector) {
  let element = document.querySelector(cssSelector);
  if (element !== null) {
    element.style.display = "none";
  }
}

sjulElementViaCssSelector(".produkt");
