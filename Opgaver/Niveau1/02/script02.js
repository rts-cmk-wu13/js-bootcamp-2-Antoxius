function beregnForhold(a, b) {
  return a / b;
}
function beregnForhold2(a, b) {
  if (b == 0) return null
  return a / b;
}

let resultat = beregnForhold(4, 3);
let resultat2 = beregnForhold2(12, 3);
console.log(resultat); // Udskriver 1.3333333333333333
console.log(resultat2); // Udskriver 1.3333333333333333
